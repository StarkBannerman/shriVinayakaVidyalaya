import { Box, Toolbar } from "@mui/material";
import AcademicsIntroBox from "../components/Academics/AcademicsIntroBox.jsx";
import MenuBar from "../components/Common/Menu.jsx";
import ExtracurricularActivities from "../components/Academics/ExtracurricularActivities.jsx";
import Footer from "../components/Common/Footer.jsx";
import Subjects from "../components/Academics/Subjects.jsx";
import Features from "../components/Academics/Features.jsx";

export default function AcademicsPage() {
  return (
    <Box sx={{ width: "100vw" }}>
      <MenuBar />
      <Toolbar />
      <AcademicsIntroBox />
      <ExtracurricularActivities />
      <Subjects />
      <Features />
      <Footer />
    </Box>
  );
}
