import generated from "./generated/admissions.json";

// The /admissions page. Content comes from Sanity, fetched at BUILD time by
// scripts/fetch-content.mjs. Nothing is fetched in the browser.
//
// Until someone publishes the page in Sanity, the site falls back to the copy
// below — which is exactly what was hardcoded in the components before, so the
// page renders identically either way.

const FALLBACK = {
  introHeading: "Admission",
  introBody:
    "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school",

  applyHeading: "APPLY TODAY!",
  applyBody:
    "We accept the Standard Application Online. When you click the link below you will be brought to a third-party site that allows you to apply to hundreds of schools with one application -- not that you need to apply to more than one -- but just in case, we try to keep it simple.",
  applyCtaLabel: "Apply Now",
  applyCtaMode: "form",
  applyCtaUrl: null,

  timeline: [
    {
      name: "Inquiry",
      desc: "Submit an inquiry form through our website or contact our admissions office to express your interest in Shri Vinayaka Vidyalaya.",
    },
    {
      name: "School Tour",
      desc: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
    },
    {
      name: "Application Form",
      desc: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
    },
    {
      name: "Parent Interview",
      desc: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Shri Vinayaka Vidyalaya aligns with your family's expectations.",
    },
    {
      name: "Student Assessment",
      desc: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
    },
    {
      name: "Acceptance",
      desc: "Once the admission process is complete, you will receive an official acceptance letter from Shri Vinayaka Vidyalaya.",
    },
  ],
};

export const ADMISSIONS = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;

/** Where the "Apply Now" button goes, given the mode chosen in the CMS. */
export function admissionsCtaHref({ applyCtaMode, applyCtaUrl }, site) {
  switch (applyCtaMode) {
    case "form":
      return "/contactus";
    case "phone":
      return `tel:${site.phoneHref}`;
    case "email":
      return `mailto:${site.email}`;
    case "url":
      return applyCtaUrl || null;
    default:
      return null;
  }
}
