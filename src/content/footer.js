import generated from "./generated/footer.json";
import { SITE, ADDRESS_LINE } from "../config/site";

// Footer and school contact details.
//
// The fallback is src/config/site.js, which is still the source of truth for
// anything the CMS does not cover (the site URL, the founding year, and the
// JSON-LD in public/index.html).

const FALLBACK = {
  phone: SITE.phone,
  email: SITE.email,
  address: ADDRESS_LINE,
  copyrightName: SITE.name,
  socials: [
    { platform: "facebook", url: SITE.social.facebook },
    { platform: "instagram", url: SITE.social.instagram },
  ],
  usefulLinks: [
    { title: "Admission", link: "/admissions" },
    { title: "Infrastructure", link: "/infrastructure" },
    { title: "About", link: "/about" },
  ],
  updateLinks: [
    { title: "Academics", link: "/academics" },
    { title: "Contact Us", link: "/contactus" },
  ],
  legalLinks: [{ title: "Privacy Policy", link: "/privacy" }],
};

export const FOOTER = generated.page
  ? { ...FALLBACK, ...generated.page }
  : FALLBACK;

/**
 * Contact details, CMS-first with the code config behind them. Anything the
 * footer document does not own (url, foundedYear) still comes from SITE.
 */
export const CONTACT_DETAILS = {
  ...SITE,
  phone: FOOTER.phone,
  email: FOOTER.email,
  // tel: href — digits and a leading + only.
  phoneHref: `+${String(FOOTER.phone).replace(/[^\d]/g, "")}`,
};
