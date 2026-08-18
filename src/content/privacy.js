import generated from "./generated/privacy.json";
import { plainBlock } from "./RichText";

// The privacy notice. The fallback below is the text the page shipped with —
// it describes what the enquiry form actually does today. If the form changes,
// this has to change with it.

const s = (heading, text) => ({ heading, body: plainBlock(text) });

const FALLBACK = {
  heading: "Privacy Policy",
  lastUpdated: "2026-08-13",
  sections: [
    s(
      "What we collect",
      "When you submit the enquiry form on our Contact Us page, we collect the parent or guardian's name, email address and phone number, the prospective student's name and age, the programme you are interested in, and any message you choose to add. We do not collect this information anywhere else on the site, and we do not use advertising or tracking cookies.",
    ),
    s(
      "Why we collect it",
      "We use these details for one purpose only: to respond to your admission enquiry and to contact you about the programme you asked about. We do not sell, rent or share your details with third parties for marketing.",
    ),
    s(
      "Children's information",
      "The enquiry form asks for a prospective student's name and age. This information should only ever be submitted by that child's parent or legal guardian. By submitting the form you confirm that you are the parent or guardian and that you consent to us processing these details for the purpose of your admission enquiry.",
    ),
    s(
      "How the form is delivered",
      "Enquiries submitted through this website are delivered to our official email address using EmailJS, a third-party email delivery service. Your submission passes through their systems in order to reach us. We retain enquiry emails in our mailbox for as long as needed to process your admission enquiry and to meet our record keeping obligations.",
    ),
    s(
      "Your rights",
      "You may ask us at any time for a copy of the information you have submitted, ask us to correct it, or ask us to delete it. Write to us and we will action your request.",
    ),
  ],
};

export const PRIVACY = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;
