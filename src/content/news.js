import generated from "./generated/news.json";
import { IMAGES } from "./generated/images";
import independenceDay from "../assets/independencedaycelebration.webp";
import krishnaJanmashtami from "../assets/krishnaJanmashami.webp";
import kannadaRajyotsava from "../assets/kannadarajotsava.webp";

// News & events, shared by the home page strip, the /news listing and each
// event's own page.
//
// Content comes from Sanity, fetched at BUILD time by scripts/fetch-content.mjs
// into ./generated/news.json. Cover photos are baked into the build; gallery
// photos are served from Sanity's CDN (there can be hundreds — see the note in
// the fetch script).
//
// Until the first event is published in Sanity the site falls back to the three
// below, so it is never empty.

const FALLBACK = [
  {
    id: "kannada-rajyotsava-2024",
    name: "Kannada Rajyotsava",
    subheading: null,
    date: "2024-11-01",
    time: null,
    image: kannadaRajyotsava,
    imageAlt:
      "Students celebrating Kannada Rajyotsava at Shri Vinayaka Vidyalaya",
    desc: "Our students marked Karnataka's formation day with cultural performances celebrating the state's language and heritage.",
    link: null,
    body: null,
    gallery: [],
  },
  {
    id: "krishna-janmashtami-2024",
    name: "Krishna Janmashtami",
    subheading: null,
    date: "2024-08-26",
    time: null,
    image: krishnaJanmashtami,
    imageAlt: "Krishna Janmashtami celebrations at Shri Vinayaka Vidyalaya",
    desc: "The school community came together to celebrate Krishna Janmashtami with music, costumes and festivities.",
    link: null,
    body: null,
    gallery: [],
  },
  {
    id: "independence-day-2024",
    name: "Independence Day Celebration",
    subheading: null,
    date: "2024-08-15",
    time: null,
    image: independenceDay,
    imageAlt: "Independence Day flag hoisting at Shri Vinayaka Vidyalaya",
    desc: "Students and staff gathered for the flag hoisting and a programme of patriotic songs and performances.",
    link: null,
    body: null,
    gallery: [],
  },
];

// Cover photos are downloaded at build time and bundled — `image` holds a key
// into that map. Anything unrecognised (a fallback import) passes through.
const asset = (key) => IMAGES[key] || key;

const normalise = (e) => ({
  subheading: null,
  time: null,
  link: null,
  body: null,
  gallery: [],
  ...e,
  image: asset(e.image),
});

/** Every event, newest first. */
export const NEWS_EVENTS = (
  generated.news && generated.news.length > 0 ? generated.news : FALLBACK
).map(normalise);

/** dd/mm/yyyy, matching the format used across the site. */
export const formatEventDate = (iso) => {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "16 November 2026" — for the event page and the upcoming list. */
export const formatEventDateLong = (iso) => {
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
};

export const monthName = (n) => MONTHS[Number(n) - 1];

/** Short month + day, for the upcoming-events date chip. */
export const eventDayParts = (iso) => {
  const [, month, day] = iso.split("-");
  return {
    month: MONTHS[Number(month) - 1].slice(0, 3),
    day: String(Number(day)),
  };
};

/**
 * Upcoming vs past is decided against the VISITOR's clock, not the build's.
 * Content is baked when the site builds, so a build-time comparison would
 * leave a finished event sitting under "Upcoming" until the next publish.
 */
const todayISO = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/** Events today or later, soonest first — the only sensible order for these. */
export function upcomingEvents(events = NEWS_EVENTS) {
  const today = todayISO();
  return events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Events before today, newest first — the archive. */
export function pastEvents(events = NEWS_EVENTS) {
  const today = todayISO();
  return events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Look up one event by its slug, for /news/:slug. */
export const findEvent = (slug) =>
  NEWS_EVENTS.find((e) => e.id === slug) || null;

/**
 * The month/year options offered by the filters, derived from what is actually
 * published — a hardcoded list would offer months with no events in them.
 */
export function filterOptions(events) {
  const years = new Set();
  const months = new Set();
  events.forEach(({ date }) => {
    const [y, m] = date.split("-");
    years.add(y);
    months.add(m);
  });
  return {
    years: [...years].sort((a, b) => b.localeCompare(a)),
    months: [...months].sort(),
  };
}

/** Search across heading, subheading and summary. */
export function searchEvents(events, query) {
  const q = query.trim().toLowerCase();
  if (!q) return events;
  return events.filter((e) =>
    [e.name, e.subheading, e.desc]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

export function applyFilters(
  events,
  { query = "", month = "", year = "", sort = "newest" },
) {
  let out = searchEvents(events, query);
  if (year) out = out.filter((e) => e.date.startsWith(year));
  if (month) out = out.filter((e) => e.date.split("-")[1] === month);
  return [...out].sort((a, b) =>
    sort === "oldest"
      ? a.date.localeCompare(b.date)
      : b.date.localeCompare(a.date),
  );
}
