import { Box, Toolbar } from "@mui/material";
import InfraTitle from "../components/Infrastructure/Infratitle";
import MenuBar from "../components/Common/Menu";
import Laborotaries from "../components/Infrastructure/Laborotaries";
import Footer from "../components/Common/Footer";
import CommonFacilities from "../components/Infrastructure/CommonFacilities";
import SportsFacilities from "../components/Infrastructure/sportsFacilities";
import ClassRoomFacilities from "../components/Infrastructure/ClassRoomFacilities";

export default function Infrastructure() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <MenuBar />
      <Toolbar />
      <InfraTitle />
      <Laborotaries />
      <CommonFacilities />
      <SportsFacilities />
      <ClassRoomFacilities />
      <Footer />
    </Box>
  );
}
