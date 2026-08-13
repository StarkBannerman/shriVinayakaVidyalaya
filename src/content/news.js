import independenceDay from "../assets/independencedaycelebration.webp";
import krishnaJanmashtami from "../assets/krishnaJanmashami.webp";
import kannadaRajyotsava from "../assets/kannadarajotsava.webp";

// Single source of truth for news & events, shared by the home page strip
// and the /news listing. Add new entries at the top — newest first.
//
// `date` is ISO (YYYY-MM-DD) so it sorts and formats correctly.
export const NEWS_EVENTS = [
  {
    id: "kannada-rajyotsava-2024",
    name: "Kannada Rajyotsava",
    date: "2024-11-01",
    image: kannadaRajyotsava,
    desc: "Our students marked Karnataka's formation day with cultural performances celebrating the state's language and heritage.",
    link: "#",
  },
  {
    id: "krishna-janmashtami-2024",
    name: "Krishna Janmashtami",
    date: "2024-08-26",
    image: krishnaJanmashtami,
    desc: "The school community came together to celebrate Krishna Janmashtami with music, costumes and festivities.",
    link: "#",
  },
  {
    id: "independence-day-2024",
    name: "Independence Day Celebration",
    date: "2024-08-15",
    image: independenceDay,
    desc: "Students and staff gathered for the flag hoisting and a programme of patriotic songs and performances.",
    link: "#",
  },
];

// dd/mm/yyyy, matching the format used across the site.
export const formatEventDate = (iso) => {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};
