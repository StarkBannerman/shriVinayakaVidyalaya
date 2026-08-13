import { Box, Toolbar, Typography, Link } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";
import Footer from "../components/Common/Footer";
import Seo from "../components/Common/Seo";
import { SITE, ADDRESS_LINE } from "../config/site";

// NOTE FOR THE SCHOOL: this notice describes what the website actually does
// today (see src/components/ContactUs/ContactUsForm.jsx). India's DPDP Act
// 2023 requires a published notice and verifiable parental consent before
// processing a child's data. Have this reviewed by your legal advisor and
// update the "last updated" date whenever the form changes.
const LAST_UPDATED = "13 August 2026";

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
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "#777", fontSize: "14px", mb: 4 }}>
            Last updated: {LAST_UPDATED}
          </Typography>

          <Section heading="What we collect">
            When you submit the enquiry form on our Contact Us page, we collect
            the parent or guardian's name, email address and phone number, the
            prospective student's name and age, the programme you are interested
            in, and any message you choose to add. We do not collect this
            information anywhere else on the site, and we do not use advertising
            or tracking cookies.
          </Section>

          <Section heading="Why we collect it">
            We use these details for one purpose only: to respond to your
            admission enquiry and to contact you about the programme you asked
            about. We do not sell, rent or share your details with third parties
            for marketing.
          </Section>

          <Section heading="Children's information">
            The enquiry form asks for a prospective student's name and age. This
            information should only ever be submitted by that child's parent or
            legal guardian. By submitting the form you confirm that you are the
            parent or guardian and that you consent to us processing these
            details for the purpose of your admission enquiry.
          </Section>

          <Section heading="How the form is delivered">
            Enquiries submitted through this website are delivered to our
            official email address using EmailJS, a third-party email delivery
            service. Your submission passes through their systems in order to
            reach us. We retain enquiry emails in our mailbox for as long as
            needed to process your admission enquiry and to meet our record
            keeping obligations.
          </Section>

          <Section heading="Your rights">
            You may ask us at any time for a copy of the information you have
            submitted, ask us to correct it, or ask us to delete it. Write to us
            at{" "}
            <Link
              href={`mailto:${SITE.email}`}
              sx={{ color: "#F68820", textDecoration: "none" }}
            >
              {SITE.email}
            </Link>{" "}
            and we will action your request.
          </Section>

          <Section heading="Contact us">
            {SITE.name}
            <br />
            {ADDRESS_LINE}
            <br />
            Email:{" "}
            <Link
              href={`mailto:${SITE.email}`}
              sx={{ color: "#F68820", textDecoration: "none" }}
            >
              {SITE.email}
            </Link>
            <br />
            Phone:{" "}
            <Link
              href={`tel:${SITE.phoneHref}`}
              sx={{ color: "#F68820", textDecoration: "none" }}
            >
              {SITE.phone}
            </Link>
          </Section>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
