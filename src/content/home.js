import heroDesk1 from "../assets/Banner4.webp";
import heroDesk2 from "../assets/Banner2.webp";
import heroDesk3 from "../assets/Banner3.webp";
import heroMob2 from "../assets/MobileBanner6.webp";
import heroMob3 from "../assets/MobileBanner5.webp";
import generated from "./generated/home.json";
import { IMAGES } from "./generated/images";

// The home page. Content comes from Sanity at BUILD time.
// Both the desktop and Mobile* components read from here.
// The fallback is the DESKTOP copy.

const FALLBACK = {
  heroSlides: [
    {
      image: heroDesk1,
      mobileImage: heroDesk1,
      alt: "Students at Shri Vinayaka Vidyalaya",
      caption: "Your Future Begins Here ...",
    },
    {
      image: heroDesk2,
      mobileImage: heroMob2,
      alt: "Students at Shri Vinayaka Vidyalaya",
      caption: "",
    },
    {
      image: heroDesk3,
      mobileImage: heroMob3,
      alt: "Students at Shri Vinayaka Vidyalaya",
      caption: "",
    },
  ],
  bannerText: "Celebrating 35 years of excellence in academics",
  welcomeTagline:
    '"Celebrating Diversity, Inspiring Excellence, and Building the Future.\u201d',
  welcomeHeading:
    "Welcome to Shri Vinayaka Vidyalaya – One of the Best Schools in Bangalore",
  welcomeBody:
    "\"Shri Vinayaka Vidyalaya, one of the leading co-educational schools in Bangalore, has been a trusted name in education for over 35 years. Located in the heart of JP Nagar, Bangalore, our school offers a balanced approach to academics, sports, and extracurricular activities. We are dedicated to providing high-quality education that nurtures every child's potential, equipping them with skills for the future. Whether you're looking for the best school for girls in Bangalore or the best school for boys in Bangalore, Shri Vinayaka Vidyalaya offers an inclusive, student-centered environment where every child can thrive.\"",
  facilities: [
    {
      name: "Library",
    },
    {
      name: "Sports",
    },
    {
      name: "Science Lab",
    },
    {
      name: "IT Lab",
    },
    {
      name: "Extra Curriculars",
    },
  ],
  expertiseHeading: "Our Expertise in Education",
  expertise: [
    {
      heading: "35 Years of Experience ",
      paragraph:
        "The school was established in 1990 by the late Sri Doddamani Dasarath and his wife Smt. Sumathi Doddamani with a clear vision: to offer high-quality English medium education to children in the community at an affordable cost. Our mission is to nurture the intellectual, moral, physical, and social growth of our students. Committed to continuous improvement, we regularly evaluate and refine our practices to ensure we provide the best possible education as we move forward.",
      listItems: [],
      subItems: [],
      link: "/about",
    },
    {
      heading: "Extra curricular activities",
      paragraph: "",
      listItems: [
        "Swimming",
        "Taek-won-do",
        " Vedic Math",
        "Abacus",
        "Konakkol",
        "Bhajans",
        "Free style Dancing",
      ],
      subItems: [],
      link: "#",
    },
    {
      heading: "Annual Flagship Events ",
      paragraph: "",
      listItems: [],
      subItems: [
        {
          subHeading: "Confluenze",
          paragraph:
            "Every year, Confluenze brings out the hidden talents of our students, making it a unique opportunity for self-expression.",
        },
        {
          subHeading: "Utopia",
          paragraph:
            "Our annual interschool cultural event, Utopia, celebrates creativity and fosters camaraderie among students from different schools in Bangalore.",
        },
      ],
      link: "/academics",
    },
  ],
  statsHeading: "Student Engagement Program",
  stats: [
    {
      value: "200+",
      label: "Distinctions in just last ten years",
    },
    {
      value: "35+",
      label: "Years of Experience",
    },
    {
      value: "5000+",
      label: "Students Successful in their career",
    },
  ],
  feedbackHeading: "What our Parents and Volunteers feel about our Institution",
  reviews: [
    {
      profilePicture: null,
      name: "Amreen",
      profession: "7th std Nawaez Hussein's parent",
      reviewDesc:
        "As a parent of Naweaz Hussain, who has been attending Shri Vinayaka Vidyalaya since nursery and is now in 7th grade, I’m highly impressed with the school's balanced approach to education. The teachers are dedicated and supportive, helping Naweaz excel academically while also encouraging involvement in extracurricular activities that have boosted his confidence and social skills. The school's infrastructure is well-maintained, and they keep parents well-informed about their child's progress. Overall, Shri Vinayaka Vidyalaya offers a nurturing environment that has greatly contributed to my child's development.",
    },
    {
      profilePicture: null,
      name: "Mridula",
      profession: "Ed.M, Harvard Graduate School of Education, USA",
      volunteeringDetails: "Volunteered from 2023-2024",
      reviewDesc:
        "Volunteering with SVV was an incredibly enriching experience. I had the freedom to choose the subject I wanted to teach and the method that best suited my approach. I truly appreciated the trust the management placed in me to lead and teach. The students' eagerness and enthusiasm made it a breeze to facilitate activities and achieve the learning outcomes we aimed for!",
    },
    {
      profilePicture: null,
      name: "Alekhya",
      profession:
        "MSc Environment Science, Wageningen University & Research, the Netherlands",
      volunteeringDetails: "Volunteered from 2019-2020",
      reviewDesc:
        "Working in SVV was never that, work. It was an experience in growth, confidence & sheer happiness. Impacting young minds, curating the library selection, guiding communication & environmental driven changes - these are just some of the many fond memories of my time there. It is my biggest pleasure to call myself a part of the SVV family, shape talented students & contribute to the STEM future of our country.",
    },
  ],
};

// Photos published in Sanity are downloaded at build time and bundled, so the
// browser never contacts Sanity. `image` holds a key into that bundled map.
const asset = (key) => IMAGES[key] || key;

const withHero = (page) => {
  // If the slideshow has not been authored, drop the key entirely so the
  // spread below leaves the built-in banners in place.
  if (!Array.isArray(page.heroSlides) || page.heroSlides.length === 0) {
    const { heroSlides, ...rest } = page;
    return rest;
  }
  return {
    ...page,
    heroSlides: page.heroSlides.map((s) => ({
      ...s,
      image: asset(s.image),
      mobileImage: asset(s.mobileImage || s.image),
    })),
  };
};

const withReviews = (page) =>
  Array.isArray(page.reviews)
    ? {
        ...page,
        // Uploaded photo when there is one; the component supplies the
        // default illustration otherwise.
        reviews: page.reviews.map((r) => ({
          ...r,
          photo: r.photo ? asset(r.photo) : null,
        })),
      }
    : page;

export const HOME = generated.page
  ? { ...FALLBACK, ...withReviews(withHero(generated.page)) }
  : FALLBACK;
