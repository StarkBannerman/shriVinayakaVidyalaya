import { Box, Toolbar } from "@mui/material";
import InfraTitle from "../components/Infrastructure/Infratitle";
import MenuBar from "../components/Common/Menu";
import Laborotaries from "../components/Infrastructure/Laborotaries";
import Footer from "../components/Common/Footer";
import CommonFacilities from "../components/Infrastructure/CommonFacilities";
import SportsFacilities from "../components/Infrastructure/sportsFacilities";
import ClassRoomFacilities from "../components/Infrastructure/ClassRoomFacilities";
import MobileMenuBar from "../components/MobileViews/MobileMenuBar";
import MobileLaborotaries from "../components/InfrastructureMobile/MobileLaboratories";
import MobileCommonFacilities from "../components/InfrastructureMobile/MobileCommonInfrastructure";
import MobileSportsFacilities from "../components/InfrastructureMobile/MobileSportsFacilities";
import MobileClassRoomFacilities from "../components/InfrastructureMobile/MobileClassRoomFacilities";

export default function MobileInfrastructure() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <MobileMenuBar />
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
