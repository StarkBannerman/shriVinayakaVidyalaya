import { Box, Toolbar } from "@mui/material";
import AcademicsIntroBox from "../components/Academics/AcademicsIntroBox.jsx";
import MenuBar from "../components/Common/Menu.jsx";
import ExtracurricularActivities from "../components/Academics/ExtracurricularActivities.jsx";
import Footer from "../components/Common/Footer.jsx";
import Subjects from "../components/Academics/Subjects.jsx";
import Features from "../components/Academics/Features.jsx";
import Seo from "../components/Common/Seo";

export default function AcademicsPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <MenuBar />
      <Seo
        title="Academics"
        description="Our academic programme, subjects and extracurricular activities at Shri Vinayaka Vidyalaya, JP Nagar, Bengaluru."
      />
      <Toolbar />
      <AcademicsIntroBox />
      <ExtracurricularActivities />
      <Subjects />
      <Features />
      <Footer />
    </Box>
  );
}
