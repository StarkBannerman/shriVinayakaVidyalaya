import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "../../config/site";

/**
 * Per-route metadata. Without this every page shares one <title> and one
 * description, which makes the individual pages invisible in search results
 * and gives every WhatsApp/Facebook share the same preview.
 */
export default function Seo({ title, description, image }) {
  const { pathname } = useLocation();
  const canonical = `${SITE.url}${pathname === "/" ? "" : pathname}`;
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const ogImage = `${SITE.url}${image || "/og-image.jpg"}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
