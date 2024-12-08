import { Box, Toolbar } from "@mui/material";
import backgroundDoodle from "../assets/backgroundImage.svg";
import MenuBar from "../components/Common/Menu";
import IntroBox from "../components/About/IntroBox";
import History from "../components/About/History";
import Mission from "../components/About/Mission";
import Facilities from "../components/Home/Facilities";
import Footer from "../components/Common/Footer";
import LeaderShip from "../components/About/Leadership";

export default function AboutPage() {
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
        <MenuBar />
        <Toolbar />
        <Box
          sx={{
            // height: "40vh",
            width: "100vw",
            mt: 5,
            display: "grid",
            placeItems: "center",
          }}
        >
          <IntroBox />
        </Box>
        <History />
        <Mission />
        <Box sx={{ mb: 10 }}>
          <Facilities />
        </Box>
        <LeaderShip />
        <Footer />
      </Box>
    </>
  );
}
