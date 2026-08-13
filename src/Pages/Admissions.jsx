import { Box, Toolbar } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";
import AdmissionsIntroBox from "../components/Admissions/AdmissionsIntro";
import AdmissionsApply from "../components/Admissions/AdmissionsApply";
import AdmissionTimeline from "../components/Admissions/AdmissionTimeline";
import Footer from "../components/Common/Footer";
import Seo from "../components/Common/Seo";

export default function Admissions() {
  return (
    <Box>
      <ResponsiveMenuBar />
      <Seo
        title="Admissions"
        description="Admission process, timeline and how to apply to Shri Vinayaka Vidyalaya in JP Nagar 7th Phase, Bengaluru. Enquire about the upcoming academic year."
      />
      <Toolbar />
      <AdmissionsIntroBox />
      <AdmissionsApply />
      <AdmissionTimeline />
      <Footer />
    </Box>
  );
}
