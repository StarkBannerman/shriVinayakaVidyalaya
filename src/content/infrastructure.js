import generated from "./generated/infrastructure.json";

// The /infrastructure page. Content comes from Sanity at BUILD time.
// Both the desktop and Mobile* components read from here, so they can no
// longer drift apart. The fallback is the DESKTOP copy, which is the version
// that was kept when the two trees disagreed.

const FALLBACK = {
  introHeading: "A Campus Built for Excellence",
  introBody:
    "Our infrastructure supports every aspect of learning, making Shri Vinayaka Vidyalaya one of the top schools in JP Nagar Bangalore. From academics to extracurricular activities, our facilities cater to students' all-round development.",
  labsHeading: "Highlights of Our Infrastructure",
  laboratories: [
    {
      name: "Science Lab",
      desc: "Our state-of-the-art science lab encourages hands-on learning, allowing students to explore concepts through experiments. This practical approach enhances their understanding, preparing them for academic excellence, especially in board exams, making us one of the best schools for board exams in Bangalore.",
    },
    {
      name: "D&T Lab (Design & Technology)",
      desc: "The D&T Lab is where creativity meets innovation. This space empowers students to work on design thinking, prototyping, and practical applications of technology. From woodworking to 3D printing, students develop skills to solve real-world problems.",
    },
  ],
  commonFacilitiesHeading: "Common Facilities",
  commonFacilities: [
    {
      title: "Library",
      desc: "Our library is a treasure trove for book lovers and a cornerstone of learning at Shri Vinayaka Vidyalaya. Stocked with an extensive collection of books in English, Kannada, and Hindi, it includes fiction, non-fiction, encyclopedias, autobiographies, and religious texts. Students enjoy comics like Amar Chitra Katha, Tintin, and Tinkle, along with academic references and a six-decade archive of magazines like National Geographic and Readers’ Digest. This vibrant space nurtures a lifelong passion for reading, making us one of the schools in Bangalore known for inspiring young minds.",
    },
    {
      title: "Extracurriculars",
      desc: "From Taekwondo and freestyle dancing to Vedic Math and Abacus, we provide diverse activities to nurture every child’s unique talents. Our cultural programs, including Konakkol and Bhajans, reflect our dedication to holistic development. These opportunities highlight why we are one of the schools with good extracurricular activities in Bangalore.With a well-rounded infrastructure, Shri Vinayaka Vidyalaya ensures a comprehensive educational experience, making it one of the best schools in JP Nagar Bangalore for academics, sports, and extracurricular growth.",
    },
    {
      title: "Transport",
      desc: "At Shri Vinayaka Vidyalaya, we ensure safe and reliable transportation for all our students. Our well-organized transport system prioritizes comfort and safety, with routes planned to make commuting easy and convenient.With a focus on providing a stress-free experience for parents and students, our transport service reflects our commitment to excellence in every aspect of school life.",
    },
  ],
  sportsHeading: "Sports Facilities",
  sports: [
    {
      name: "Playground",
      desc: "Safe and spacious outdoor areas for recreational activities and games. Featuring a variety of equipment such as swings, slides, climbing structures, and open areas for games, our playgrounds cater to different age groups and interests.",
    },
    {
      name: "Swimming",
      desc: "At Shri Vinayaka Vidyalaya, our swimming pool offers a safe and enjoyable space for students to learn and grow. Guided by trained instructors, swimming sessions help build confidence, fitness, and discipline in a fun and engaging environment.",
    },
  ],
  classroomsHeading: "Class Rooms",
  classroomsIntro:
    "Our classrooms are spacious, well-lit, and equipped with the latest technology to enhance the learning experience. Our classrooms are spacious, well-lit, and equipped with the latest technology to enhance the learning experience.",
  classroomFeatures: [
    "Interactive whiteboards for engaging lessons",
    "Comfortable seating arrangements to promote collaboration",
    "Adequate storage for educational materials",
  ],
};

export const INFRASTRUCTURE = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;
