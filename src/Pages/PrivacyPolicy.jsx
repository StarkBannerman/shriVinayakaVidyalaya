import { Box, Toolbar, Typography, Link } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";
import Footer from "../components/Common/Footer";
import Seo from "../components/Common/Seo";
import { SITE } from "../config/site";
import { PRIVACY } from "../content/privacy";
import { FOOTER, CONTACT_DETAILS } from "../content/footer";
import RichText from "../content/RichText";

// NOTE FOR THE SCHOOL: this notice describes what the website actually does
// today (see src/components/ContactUs/ContactUsForm.jsx). India's DPDP Act
// 2023 requires a published notice and verifiable parental consent before
// processing a child's data. Have this reviewed by your legal advisor and
// update the "last updated" date whenever the form changes.

const Section = ({ heading, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      component="h2"
      sx={{
        fontWeight: 700,
        fontSize: { xs: "20px", md: "24px" },
        color: "#333333",
        mb: 1.5,
      }}
    >
      {heading}
    </Typography>
    <Typography
      component="div"
      sx={{
        color: "#555",
        fontSize: { xs: "14px", md: "16px" },
        lineHeight: 1.7,
      }}
    >
      {children}
    </Typography>
  </Box>
);

const formatUpdated = (iso) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [y, m, d] = String(iso).split("-");
  return `${Number(d)} ${months[Number(m) - 1]} ${y}`;
};

export default function PrivacyPolicy() {
  return (
    <Box>
      <Seo
        title="Privacy Policy"
        description={`How ${SITE.name} collects, uses and protects the information you submit through this website.`}
      />
      <ResponsiveMenuBar />
      <Toolbar />
      <Box
        component="main"
        sx={{
          width: "100%",
          py: { xs: 4, md: 8 },
          px: { xs: 3, sm: 6, md: 8 },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          <Typography
            component="h1"
            sx={{
              color: "#F68820",
              fontWeight: 700,
              fontSize: { xs: "32px", md: "44px" },
              mb: 1,
            }}
          >
            {PRIVACY.heading}
          </Typography>
          <Typography sx={{ color: "#777", fontSize: "14px", mb: 4 }}>
            Last updated: {formatUpdated(PRIVACY.lastUpdated)}
          </Typography>

          {PRIVACY.sections.map((section, i) => (
            <Section key={section.heading || i} heading={section.heading}>
              <RichText value={section.body} strongStyle={{ color: "#333" }} />
            </Section>
          ))}

          <Section heading="Contact us">
            {SITE.name}
            <br />
            {FOOTER.address}
            <br />
            Email:{" "}
            <Link
              href={`mailto:${CONTACT_DETAILS.email}`}
              sx={{ color: "#F68820", textDecoration: "none" }}
            >
              {CONTACT_DETAILS.email}
            </Link>
            <br />
            Phone:{" "}
            <Link
              href={`tel:${CONTACT_DETAILS.phoneHref}`}
              sx={{ color: "#F68820", textDecoration: "none" }}
            >
              {CONTACT_DETAILS.phone}
            </Link>
          </Section>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
