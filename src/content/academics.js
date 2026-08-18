import generated from "./generated/academics.json";
import { IMAGES } from "./generated/images";

// The /academics page. Content comes from Sanity at BUILD time.
// The fallback below is exactly what was hardcoded in the components, so the
// page renders identically until someone publishes it in Sanity.

const FALLBACK = {
  introHeading: "Academics",
  introSubheading: "Nurturing Young Minds for Success",
  introBody: [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "s0",
          text: "At ",
          marks: [],
        },
        {
          _type: "span",
          _key: "s1",
          text: "Shri Vinayaka Vidyalaya",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "s2",
          text: ", we believe academics should do more than inform — they should ",
          marks: [],
        },
        {
          _type: "span",
          _key: "s3",
          text: "transform",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "s4",
          text: ". For over 35 years, we’ve blended rigorous academics with deep-rooted values, nurturing students who think critically, care deeply, and grow intentionally. Our classrooms are not bound by four walls or textbook pages. They are ",
          marks: [],
        },
        {
          _type: "span",
          _key: "s5",
          text: "alive with dialogue, discovery, and reflection",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "s6",
          text: ". Every lesson — whether in Math, Science, or Language — is designed to spark curiosity, build resilience, and connect knowledge to real life. What makes SVV different is the ",
          marks: [],
        },
        {
          _type: "span",
          _key: "s7",
          text: "balance we create between intellect and integrity",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "s8",
          text: ". We don’t just teach students to top exams; we guide them to ",
          marks: [],
        },
        {
          _type: "span",
          _key: "s9",
          text: "lead with empathy, question boldly, and learn for life",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "s10",
          text: ".",
          marks: [],
        },
      ],
    },
  ],
  extracurricularsHeading: "Extracurricular Activities",
  extracurricularsSubheading: "Where Passions Find a Platform",
  extracurricularsIntro:
    "Learning doesn’t stop when the bell rings — at SVV, that’s when it takes flight. Our extracurricular programs are not just “add-ons”; they are essential spaces for self-discovery, leadership, and joy. Whether your child shines in front of a mic, with a paintbrush, or in a lab coat — we have a place for every kind of brilliance.",
  extracurriculars: [
    {
      icon: "sports",
      title: "Sports and Athletics",
      desc: "On our courts and fields, students learn more than just how to play — they learn how to fall, rise, collaborate, and persist. From team sports to yoga, every activity builds character and courage.",
    },
    {
      icon: "art",
      title: "Art and Creativity",
      desc: "In our art rooms, the messier the hands, the brighter the minds. Here, students are encouraged to imagine wildly, express freely, and explore the beauty of their inner world through visual arts.",
    },
    {
      icon: "music",
      title: "Music and Performing Arts",
      desc: "Every note sung, every scene acted out is a step towards confidence, rhythm, and presence. Drama, music, and dance teach our students how to tell stories — and how to own theirs.",
    },
    {
      icon: "language",
      title: "Language Clubs",
      desc: "Our language clubs are more than learning vocabulary — they’re about stepping into other worlds. Students explore global cultures, celebrate diversity, and communicate with confidence.",
    },
    {
      icon: "science",
      title: "Science Club",
      desc: "This is where “why?” meets “wow!” Through hands-on experiments and explorations, students transform questions into discoveries and curiosity into innovation.",
    },
  ],
  electivesHeading: "Electives & Clubs at SVV",
  electivesSubheading: "Where Passions Find a Platform",
  electivesTagline: "Where Choice Builds Character",
  electivesIntro:
    "At Shri Vinayaka Vidyalaya, we believe that education must celebrate individuality and nurture a wide range of intelligences — intellectual, artistic, cultural, and emotional. That's why our Elective and Club system is not a side offering, but an integrated part of the school's academic life, open to all and offered without additional charges. Each term, students select from a thoughtfully curated list of electives based on their interests — from Vedic Maths to Dance, from Toastmasters to Konnakkol. These electives are not simply \"hobbies\" — they are gateways to mastery, joy, and personal growth.",
  electives: [
    {
      title: "Le Choir",
      subtitle: "Music, Bhajan, Konnakkol",
      desc: "A space where voices rise in harmony. Whether in Carnatic rhythm or contemporary melodies, Le Choir nurtures rhythm, confidence, and stage presence.",
    },
    {
      title: "Search Lamp",
      subtitle: "Quiz (GK), Sudoku",
      desc: "For curious minds who love the thrill of a challenge. Search Lamp is where general knowledge meets critical thinking and eloquent speaking.",
    },
    {
      title: "Eureka!",
      subtitle: "Abacus, Vedic Maths, Science, Design & Tech",
      desc: "A club for inventors, builders, and thinkers. Eureka! turns logic into creativity and problem-solving into play.",
    },
    {
      title: "Happy Feet",
      subtitle: "Dance (Freestyle & Bharatanatyam)",
      desc: "Movement is expression. Happy Feet celebrates India's rich classical forms and contemporary freedom — one step, beat, and gesture at a time.",
    },
    {
      title: "Tree House",
      subtitle: "Toast masters, Sanskrit, Spoken Spanish",
      desc: "Our Literature & Communication Club where language becomes a tool for connection, creativity, and courage. With Toastmasters-style public speaking, storytelling, and a chance to explore global languages.",
    },
    {
      title: "Physical Education",
      subtitle: "Sports & Fitness",
      desc: "Promoting physical fitness, coordination, and teamwork through various sports and physical activities.",
    },
  ],
  approachHeading: "Our Approach",
  approachSubheading: "Why It's Special at SVV",
  approachIntro:
    "At SVV, we believe in empowering students through choice, celebrating their unique talents, and creating a learning environment that seamlessly blends tradition with innovation.",
  approachFeatures: [
    {
      icon: "school",
      title: "Student-led Choice",
      desc: "Students pick their electives each term, empowering them to take ownership of their learning journey and explore their passions.",
    },
    {
      icon: "trophy",
      title: "Skill Meets Expression",
      desc: "Clubs culminate in intra- and inter-school competitions, exhibitions, and performances, showcasing student talents and achievements.",
    },
    {
      icon: "code",
      title: "Holistic by Design",
      desc: "These experiences are embedded into the academic calendar — not added as extra, ensuring a well-rounded educational approach.",
    },
    {
      icon: "heritage",
      title: "Rooted and Futuristic",
      desc: "Sanskrit and Konnakkol sit proudly alongside Design & Tech and Public Speaking, bridging traditional wisdom with modern skills.",
    },
    {
      icon: "flare",
      title: "Ignite Talents",
      desc: "At SVV, we don't just find talents — we ignite them, nurture them, and watch them grow into extraordinary achievements.",
    },
    {
      icon: "heart",
      title: "Nurture Growth",
      desc: "Our comprehensive approach ensures every student receives the support and guidance needed to reach their full potential.",
    },
  ],
};

// Elective card photos are downloaded at build time and bundled; `image`
// holds a key into that map. Cards without one keep the orange header.
const asset = (key) => (key ? IMAGES[key] || key : null);

const withPhotos = (page) =>
  Array.isArray(page.electives)
    ? {
        ...page,
        electives: page.electives.map((c) => ({ ...c, image: asset(c.image) })),
      }
    : page;

export const ACADEMICS = generated.page
  ? { ...FALLBACK, ...withPhotos(generated.page) }
  : FALLBACK;
