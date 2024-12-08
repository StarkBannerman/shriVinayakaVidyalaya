import { Box, Toolbar } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";
import ContactUsIntro from "../components/ContactUs/ContactUsIntro";

export default function ContactUsPage() {
  return (
    <Box>
      <ResponsiveMenuBar />
      <Toolbar />
      <ContactUsIntro />
    </Box>
  );
}
