/**
 * Lifts the Home copy out of the DESKTOP components into src/content/home.js.
 * Reads from `git show HEAD:` so it stays re-runnable after rewiring.
 *
 *   node scripts/extract-home.mjs
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const git = (p) =>
  execFileSync("git", ["show", `HEAD:src/components/Home/${p}.jsx`], {
    encoding: "utf8",
  });

const clean = (t) =>
  t
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/\{"\s*"\}/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

function textStartingWith(src, prefix) {
  const at = src.indexOf(prefix);
  if (at === -1) throw new Error(`not found: ${prefix}`);
  const open = src.lastIndexOf(">", at) + 1;
  const close = src.indexOf("</Typography>", at);
  return clean(src.slice(open, close));
}

function evalArray(src, name) {
  const i = src.indexOf(`const ${name} = [`);
  if (i === -1) throw new Error(`array not found: ${name}`);
  const open = src.indexOf("[", i);
  let depth = 0;
  let j = open;
  for (; j < src.length; j++) {
    if (src[j] === "[") depth++;
    else if (src[j] === "]" && --depth === 0) break;
  }
  const block = src
    .slice(i, j + 1)
    .replace(/(image|icon|profilePicture):\s*([A-Za-z_$][\w$]*)\s*([,}])/g, "$1: null$3");
  // eslint-disable-next-line no-eval
  return eval(`${block}; ${name}`);
}

const welcome = git("WelcomeMessage");
const facilities = git("Facilities");
const expertise = git("SchoolExpertise");
const stats = git("StudentEngagementStats");
const feedback = git("ParentsFeedback");
const banner = git("scrollableBanner");

const data = {
  bannerText: textStartingWith(banner, "Celebrating 35 years"),

  welcomeHeading: textStartingWith(welcome, "Welcome to Shri Vinayaka Vidyalaya"),
  welcomeBody: textStartingWith(welcome, '"Shri Vinayaka Vidyalaya, one of the leading'),

  facilities: evalArray(facilities, "facilities").map((f) => ({ name: f.name })),

  expertiseHeading: "Our Expertise in Education",
  expertise: evalArray(expertise, "cardData").map((c) => ({
    heading: c.heading,
    paragraph: c.paragraph || "",
    listItems: c.listItems || [],
    subItems: (c.subItems || []).map((s) => ({
      subHeading: s.subHeading,
      paragraph: s.paragraph,
    })),
    link: c.link,
  })),

  statsHeading: "Student Engagement Program",
  stats: [
    { value: "200+", label: "Distinctions in just last ten years" },
    { value: "35+", label: "Years of Experience" },
    { value: "5000+", label: "Students Successful in their career" },
  ],

  feedbackHeading: "What our Parents and Volunteers feel about our Institution",
  reviews: evalArray(feedback, "reviews"),
};

writeFileSync(
  "src/content/home.js",
  `import generated from "./generated/home.json";

// The home page. Content comes from Sanity at BUILD time.
// Both the desktop and Mobile* components read from here.
// The fallback is the DESKTOP copy.

const FALLBACK = ${JSON.stringify(data, null, 2)};

export const HOME = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;
`,
);

console.log("✓ src/content/home.js");
console.log(`  facilities : ${data.facilities.map((f) => f.name).join(", ")}`);
console.log(`  expertise  : ${data.expertise.map((e) => e.heading.trim()).join(" | ")}`);
console.log(`  reviews    : ${data.reviews.length}, keys: ${Object.keys(data.reviews[0] || {}).join(", ")}`);
