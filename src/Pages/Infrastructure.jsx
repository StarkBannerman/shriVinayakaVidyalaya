import { Box, Toolbar } from "@mui/material";
import InfraTitle from "../components/Infrastructure/Infratitle";
import MenuBar from "../components/Common/Menu";
import Laborotaries from "../components/Infrastructure/Laborotaries";
import Footer from "../components/Common/Footer";
import CommonFacilities from "../components/Infrastructure/CommonFacilities";
import SportsFacilities from "../components/Infrastructure/sportsFacilities";
import ClassRoomFacilities from "../components/Infrastructure/ClassRoomFacilities";
import Seo from "../components/Common/Seo";

export default function Infrastructure() {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <MenuBar />
      <Seo
        title="Infrastructure & Facilities"
        description="Explore the laboratories, classrooms, library, sports grounds and transport facilities at Shri Vinayaka Vidyalaya, JP Nagar, Bengaluru."
      />
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
