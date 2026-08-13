/**
 * Lifts the About copy out of the DESKTOP components into
 * src/content/about.js. Reads from `git show HEAD:` so it stays re-runnable
 * after the components are rewired.
 *
 *   node scripts/extract-about.mjs
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const git = (p) =>
  execFileSync("git", ["show", `HEAD:src/components/About/${p}.jsx`], {
    encoding: "utf8",
  });

/** JSX text-node semantics, plus JSX comments stripped. */
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

const intro = git("IntroBox");
const history = git("History");
const mission = git("Mission");
const leadership = git("Leadership");

const data = {
  introHeading: "About us",
  introQuote: textStartingWith(intro, "Education bestows humility"),
  introBody: textStartingWith(intro, "Welcome to the school that celebrates"),

  historyHeading: "Our Story",
  historyBody: textStartingWith(history, "Shri Vinayaka Vidyalaya, established in 1990"),

  missionHeading: "Mission",
  missionBody: textStartingWith(mission, "At Shri Vinayaka Vidyalaya, our mission is to nurture"),
  visionHeading: "Vision",
  visionBody: textStartingWith(mission, "To become one of the best schools for board exams"),

  whyHeading: "Why Shri Vinayaka Vidyalaya?",
  whyPoints: [
    { title: "Experienced Faculty", desc: textStartingWith(leadership, "Our teachers are the heart of our school") },
    { title: "Holistic Curriculum", desc: textStartingWith(leadership, "We offer a robust curriculum designed") },
    { title: "State-of-the-Art Facilities", desc: textStartingWith(leadership, "Our campus is equipped with modern infrastructure") },
  ],
};

writeFileSync(
  "src/content/about.js",
  `import generated from "./generated/about.json";

// The /about page. Content comes from Sanity at BUILD time.
// Both the desktop and Mobile* components read from here. The fallback is the
// DESKTOP copy — mobile previously rendered a shorter, partly garbled version.

const FALLBACK = ${JSON.stringify(data, null, 2)};

export const ABOUT = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;
`,
);

console.log("✓ src/content/about.js");
for (const [k, v] of Object.entries(data)) {
  console.log(`  ${k.padEnd(16)} ${Array.isArray(v) ? v.length + " items" : String(v).slice(0, 60) + "…"}`);
}
