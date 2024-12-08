import { Box, Toolbar } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";
import AdmissionsIntroBox from "../components/Admissions/AdmissionsIntro";
import AdmissionsApply from "../components/Admissions/AdmissionsApply";
import AdmissionTimeline from "../components/Admissions/AdmissionTimeline";
import Footer from "../components/Common/Footer";

export default function Admissions() {
  return (
    <Box>
      <ResponsiveMenuBar />
      <Toolbar />
      <AdmissionsIntroBox />
      <AdmissionsApply />
      <AdmissionTimeline />
      <Footer />
    </Box>
  );
}
