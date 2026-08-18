import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LanguageIcon from "@mui/icons-material/Language";

/**
 * Social platforms are stored in the CMS as a plain name from a fixed list,
 * never as an icon — an editor picks from a dropdown and cannot ship a broken
 * element. The hover colour is each platform's brand colour, so it stays part
 * of the design rather than something anyone has to choose.
 *
 * Keys must match the `options.list` values in studio/schemas/footer.js.
 */
const SOCIALS = {
  facebook: { Icon: FacebookIcon, label: "Facebook", hover: "#3b5998" },
  instagram: { Icon: InstagramIcon, label: "Instagram", hover: "#E4405F" },
  youtube: { Icon: YouTubeIcon, label: "YouTube", hover: "#FF0000" },
  linkedin: { Icon: LinkedInIcon, label: "LinkedIn", hover: "#0A66C2" },
  x: { Icon: XIcon, label: "X", hover: "#000000" },
  whatsapp: { Icon: WhatsAppIcon, label: "WhatsApp", hover: "#25D366" },
  website: { Icon: LanguageIcon, label: "Website", hover: "#F68820" },
};

const FALLBACK = { Icon: LanguageIcon, label: "Link", hover: "#F68820" };

export const socialMeta = (platform) => SOCIALS[platform] || FALLBACK;

export function SocialIcon({ platform, ...props }) {
  const { Icon } = socialMeta(platform);
  return <Icon {...props} />;
}

export const SOCIAL_PLATFORMS = Object.entries(SOCIALS).map(([value, v]) => ({
  value,
  title: v.label,
}));
