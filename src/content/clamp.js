/**
 * Truncate text to a fixed number of lines with an ellipsis.
 *
 * Every card on this site has a fixed pixel height and no overflow handling,
 * so a long entry typed into the CMS would push text out of its box. Character
 * limits in the Studio help but are advisory and drift from the real layout —
 * this is the hard stop.
 *
 *   <Typography sx={{ ...clamp(3) }}>{text}</Typography>
 */
export const clamp = (lines) => ({
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  // Belt and braces for very long unbroken strings (a pasted URL).
  overflowWrap: "anywhere",
});
