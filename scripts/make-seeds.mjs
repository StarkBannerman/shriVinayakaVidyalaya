/**
 * Generates Sanity seed files from the FALLBACK copy in each content module —
 * which is itself the copy lifted out of the components. So the seed always
 * matches what the site renders before anything is authored.
 *
 *   node scripts/make-seeds.mjs
 *   cd studio && npx sanity dataset import ../seed/<page>.ndjson production --replace
 *
 * Safe to re-run; it only reads the content modules.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const PAGES = [
  { module: "academics", docId: "academicsPage", docType: "academicsPage",
    arrays: { extracurriculars: "ex", electives: "el", approachFeatures: "ap" } },
  { module: "home", docId: "homePage", docType: "homePage",
    arrays: { facilities: "fac", expertise: "exp", stats: "st", reviews: "rev" },
    hero: [
      { image: "Banner4.webp", mobileImage: "Banner4.webp",
        alt: "Students at Shri Vinayaka Vidyalaya", caption: "Your Future Begins Here ..." },
      { image: "Banner2.webp", mobileImage: "MobileBanner6.webp",
        alt: "Students at Shri Vinayaka Vidyalaya", caption: "" },
      { image: "Banner3.webp", mobileImage: "MobileBanner5.webp",
        alt: "Students at Shri Vinayaka Vidyalaya", caption: "" },
    ] },
  { module: "about", docId: "aboutPage", docType: "aboutPage",
    arrays: { whyPoints: "why" } },
  { module: "infrastructure", docId: "infrastructurePage", docType: "infrastructurePage",
    arrays: { laboratories: "lab", commonFacilities: "cf", sports: "sp" } },
  { module: "contact", docId: "contactPage", docType: "contactPage", arrays: {} },
  { module: "admissions", docId: "admissionsPage", docType: "admissionsPage",
    arrays: { timeline: "step" } },
];

/** Read a content module's FALLBACK object without importing React or JSON. */
function loadFallback(name) {
  const src = readFileSync(`src/content/${name}.js`, "utf8");
  // Keep only the FALLBACK declaration — the export line references the
  // generated JSON, which is irrelevant here and would not resolve.
  // Image imports cannot be seeded — photos are uploaded in the Studio.
  // Stub the identifiers so the literal evaluates, then drop those fields.
  const start = src.indexOf("const FALLBACK =");
  const end = src.indexOf("export const ");
  if (start === -1) throw new Error(`no FALLBACK in src/content/${name}.js`);
  // eslint-disable-next-line no-new-func
  const body = src
    .slice(start, end)
    .replace(/(image|mobileImage|icon|profilePicture):\s*([A-Za-z_$][\w$]*)\s*([,}])/g, "$1: null$3");
  return new Function(`${body}; return FALLBACK;`)();
}

mkdirSync("seed", { recursive: true });

for (const page of PAGES) {
  const data = loadFallback(page.module);

  // Sanity needs a stable _key on every array member.
  for (const [field, prefix] of Object.entries(page.arrays)) {
    if (!Array.isArray(data[field])) continue;
    data[field] = data[field].map((item, i) => ({ _key: `${prefix}${i}`, ...item }));
  }

  // Reviews carry a stubbed profilePicture from the fallback module. It is a
  // code-side placeholder, not a schema field — emitting it makes Sanity warn
  // about an unknown field on every testimonial.
  if (Array.isArray(data.reviews)) {
    data.reviews = data.reviews.map(({ profilePicture, ...rest }) => rest);
  }

  // heroSlides carries uploaded photos. `_sanityAsset` tells the importer to
  // upload the local file and link it, so the slideshow arrives populated with
  // the banners the site already ships.
  if (page.hero) {
    data.heroSlides = page.hero.map((h, i) => ({
      _key: `hero${i}`,
      image: { _sanityAsset: `image@file://${process.cwd()}/src/assets/${h.image}` },
      ...(h.mobileImage
        ? { mobileImage: { _sanityAsset: `image@file://${process.cwd()}/src/assets/${h.mobileImage}` } }
        : {}),
      alt: h.alt,
      caption: h.caption,
    }));
  } else {
    delete data.heroSlides;
  }
  const doc = { _id: page.docId, _type: page.docType, ...data };
  writeFileSync(`seed/${page.docId}.ndjson`, JSON.stringify(doc) + "\n");

  const counts = Object.keys(page.arrays)
    .map((f) => `${f}=${Array.isArray(data[f]) ? data[f].length : 0}`)
    .join(" ");
  console.log(`✓ seed/${page.docId}.ndjson  ${counts}`);
}

console.log(`
⚠  These are BOOTSTRAP seeds. Importing with --replace overwrites the whole
   document, including the banner slideshow and any photos already uploaded.
   Only import into a fresh project, or a page nobody has edited yet.

Import them all with:

  cd studio
  npx sanity login                      # once
  for f in ../seed/*.ndjson; do npx sanity dataset import "$f" production --replace; done
`);
