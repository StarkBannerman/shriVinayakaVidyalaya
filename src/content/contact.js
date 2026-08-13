import generated from "./generated/contact.json";

// The /contactus page. Content comes from Sanity at BUILD time.
// The fallback below is exactly what was hardcoded in the components, so the
// page renders identically until someone publishes it in Sanity.

const FALLBACK = {
  introBody:
    "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods",
  imageHeading: "Feel Free To Connect With Us",
  imageCtaLabel: "Contact Us",

  address:
    "10, 1st Main road, Guru Raghavendra Nagar, Eswara Layout, JP Nagar 7th phase, Arekere kothanur, Bengaluru Karnataka 560078",
  officeHours: "9am - 6 pm",

  formHeading: "Contact Form",
  formSubheading: "Student Information",
  formIntro:
    "If you have specific questions or wish to request more information about Shri Vinayaka Vidyalaya, please complete the contact form below. Kindly provide the following details to help us better understand your needs",
  programs: [
    "Early Childhood Program",
    "Primary School Program",
    "Middle School Program",
    "High School Program",
    "Special Education Program",
    "Summer Camp",
  ],
  successMessage:
    "🎉 Thank you! Your inquiry has been sent successfully to Shri Vinayaka Vidyalaya. Our team will contact you within 24 hours.",
  errorMessage:
    "❌ Sorry, there was an error sending your message. Please try again or contact us directly at",
};

export const CONTACT = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;
