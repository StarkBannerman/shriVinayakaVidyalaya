import { Box, Toolbar } from "@mui/material";
import backgroundDoodle from "../assets/backgroundImage.svg";
import Footer from "../components/Common/Footer";
import MobileIntroBox from "../components/AboutUsMobileViews/IntroBoxMobile";
import MobileMenuBar from "../components/MobileViews/MobileMenuBar";
import MobileHistory from "../components/AboutUsMobileViews/MobileHistory";
import MobileMission from "../components/AboutUsMobileViews/MobileMission";
import MobileFacilities from "../components/MobileViews/MobileFacilities";
import MobileLeaderShip from "../components/AboutUsMobileViews/MobileLeadership";

export default function MobileAboutPage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#FFF7E1",
          boxSizing: "border-box", // Ensures padding and borders are included in width
          overflowX: "hidden", // Prevents horizontal overflow
          backgroundImage: `url(${backgroundDoodle})`, // Replace with the path to your image
          backgroundRepeat: "repeat", // Makes the image repeat
          backgroundSize: "auto", // Ensures the original size of the image is maintained
        }}
      >
        <MobileMenuBar />
        <Toolbar />
        <Box
          sx={{
            width: "100vw",
            mt: 5,
            display: "grid",
            placeItems: "center",
          }}
        >
          <MobileIntroBox />
        </Box>
        <MobileHistory />
        <MobileMission />
        <Box sx={{ mb: 5 }}>
          <MobileFacilities />
        </Box>
        <MobileLeaderShip />
        <Footer />
      </Box>
    </>
  );
}
