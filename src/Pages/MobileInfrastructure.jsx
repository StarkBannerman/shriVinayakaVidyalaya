import { Box, Toolbar } from "@mui/material";
import InfraTitle from "../components/Infrastructure/Infratitle";
import Footer from "../components/Common/Footer";
import MobileMenuBar from "../components/MobileViews/MobileMenuBar";
import MobileLaborotaries from "../components/InfrastructureMobile/MobileLaboratories";
import MobileCommonFacilities from "../components/InfrastructureMobile/MobileCommonInfrastructure";
import MobileSportsFacilities from "../components/InfrastructureMobile/MobileSportsFacilities";
import MobileClassRoomFacilities from "../components/InfrastructureMobile/MobileClassRoomFacilities";
import Seo from "../components/Common/Seo";

export default function MobileInfrastructure() {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <MobileMenuBar />
      <Seo
        title="Infrastructure & Facilities"
        description="Explore the laboratories, classrooms, library, sports grounds and transport facilities at Shri Vinayaka Vidyalaya, JP Nagar, Bengaluru."
      />
      <Toolbar />
      <InfraTitle />
      <MobileLaborotaries />
      <MobileCommonFacilities />
      <MobileSportsFacilities />
      <MobileClassRoomFacilities />
      <Footer />
    </Box>
  );
}
