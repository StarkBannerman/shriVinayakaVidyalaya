import BoltIcon from "@mui/icons-material/Bolt";
import BrushIcon from "@mui/icons-material/Brush";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ExtensionIcon from "@mui/icons-material/Extension";
import ScienceIcon from "@mui/icons-material/Science";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import FlareIcon from "@mui/icons-material/Flare";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * Icons are stored in the CMS as plain strings, never as JSX — an editor picks
 * from a dropdown and cannot ship a broken React element.
 *
 * The keys here must match the `options.list` values in the Studio schemas.
 * Adding a new icon means adding it in both places.
 */
const ICONS = {
  sports: BoltIcon,
  art: BrushIcon,
  music: AudiotrackIcon,
  language: ExtensionIcon,
  science: ScienceIcon,
  sparkle: AutoAwesomeIcon,
  school: SchoolIcon,
  trophy: EmojiEventsIcon,
  code: IntegrationInstructionsIcon,
  heritage: HistoryEduIcon,
  flare: FlareIcon,
  heart: FavoriteIcon,
};

/**
 * Render an icon by name. Unknown names fall back to `sparkle` rather than
 * crashing the page — a wrong icon is recoverable, a white screen is not.
 */
export function Icon({ name, ...props }) {
  const Component = ICONS[name] || ICONS.sparkle;
  return <Component {...props} />;
}

export const ICON_NAMES = Object.keys(ICONS);
