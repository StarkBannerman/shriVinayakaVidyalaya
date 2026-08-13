import fs from "fs";
import path from "path";

// The site once shipped another school's name and placeholder copy in the
// admissions and contact pages. These guard against that coming back.
const SRC = path.join(__dirname, "..");

const sourceFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.(jsx?|css)$/.test(entry.name) && !/\.test\.jsx?$/.test(entry.name)
      ? [full]
      : [];
  });

const offenders = (pattern) =>
  sourceFiles(SRC)
    .filter((f) => pattern.test(fs.readFileSync(f, "utf8")))
    .map((f) => path.relative(SRC, f));

test("no other school's name appears in the copy", () => {
  expect(offenders(/Little Learners/i)).toEqual([]);
});

test("no placeholder copy ships to production", () => {
  expect(offenders(/lorem ipsum/i)).toEqual([]);
});
