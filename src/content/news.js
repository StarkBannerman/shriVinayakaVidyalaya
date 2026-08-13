import generated from "./generated/news.json";
import { IMAGES } from "./generated/images";
import independenceDay from "../assets/independencedaycelebration.webp";
import krishnaJanmashtami from "../assets/krishnaJanmashami.webp";
import kannadaRajyotsava from "../assets/kannadarajotsava.webp";

// News & events, shared by the home page strip and the /news listing.
//
// Content comes from Sanity, fetched at BUILD time by scripts/fetch-content.mjs
// into ./generated/news.json. Nothing is fetched in the browser.
//
// Until someone publishes the first item in Sanity, the site falls back to the
// three events below, so it is never empty and never breaks mid-migration.
// Once Sanity has content, these defaults stop being used — delete them then.

const FALLBACK = [
  {
    id: "kannada-rajyotsava-2024",
    name: "Kannada Rajyotsava",
    date: "2024-11-01",
    image: kannadaRajyotsava,
    imageAlt:
      "Students celebrating Kannada Rajyotsava at Shri Vinayaka Vidyalaya",
    desc: "Our students marked Karnataka's formation day with cultural performances celebrating the state's language and heritage.",
    link: "#",
  },
  {
    id: "krishna-janmashtami-2024",
    name: "Krishna Janmashtami",
    date: "2024-08-26",
    image: krishnaJanmashtami,
    imageAlt: "Krishna Janmashtami celebrations at Shri Vinayaka Vidyalaya",
    desc: "The school community came together to celebrate Krishna Janmashtami with music, costumes and festivities.",
    link: "#",
  },
  {
    id: "independence-day-2024",
    name: "Independence Day Celebration",
    date: "2024-08-15",
    image: independenceDay,
    imageAlt: "Independence Day flag hoisting at Shri Vinayaka Vidyalaya",
    desc: "Students and staff gathered for the flag hoisting and a programme of patriotic songs and performances.",
    link: "#",
  },
];

// Photos published in Sanity are downloaded at build time and bundled, so the
// browser never contacts Sanity. `image` holds a key into that bundled map.
const cdnImage = (key) => IMAGES[key] || key;

export const NEWS_EVENTS =
  generated.news && generated.news.length > 0
    ? generated.news.map((item) => ({ ...item, image: cdnImage(item.image) }))
    : FALLBACK;

// dd/mm/yyyy, matching the format used across the site.
export const formatEventDate = (iso) => {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};
