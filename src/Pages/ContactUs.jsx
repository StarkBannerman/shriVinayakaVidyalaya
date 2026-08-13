import { Box, Toolbar } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";
import ContactUsIntro from "../components/ContactUs/ContactUsIntro";
import ContactForm from "../components/ContactUs/ContactUsForm";
import Footer from "../components/Common/Footer";
import Seo from "../components/Common/Seo";

export default function ContactUsPage() {
  return (
    <Box>
      <ResponsiveMenuBar />
      <Seo
        title="Contact Us"
        description="Get in touch with Shri Vinayaka Vidyalaya, JP Nagar 7th Phase, Bengaluru. Call +91 9916372340 or send an admission enquiry."
      />
      <Toolbar />
      <ContactUsIntro />
      <ContactForm />
      <Footer />
    </Box>
  );
}
