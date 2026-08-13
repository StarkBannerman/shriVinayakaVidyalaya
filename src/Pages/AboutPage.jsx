import { Box, Toolbar } from "@mui/material";
import backgroundDoodle from "../assets/backgroundDoodle.webp";
import MenuBar from "../components/Common/Menu";
import IntroBox from "../components/About/IntroBox";
import History from "../components/About/History";
import Mission from "../components/About/Mission";
import Facilities from "../components/Home/Facilities";
import Footer from "../components/Common/Footer";
import LeaderShip from "../components/About/Leadership";
import Seo from "../components/Common/Seo";

export default function AboutPage() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#FFF7E1",
          boxSizing: "border-box", // Ensures padding and borders are included in width
          overflowX: "hidden", // Prevents horizontal overflow
          backgroundImage: `url(${backgroundDoodle})`, // Replace with the path to your image
          backgroundRepeat: "repeat", // Makes the image repeat
          backgroundSize: "auto", // Ensures the original size of the image is maintained
        }}
      >
        <MenuBar />
        <Seo
          title="About Us"
          description="Learn about Shri Vinayaka Vidyalaya's history since 1990, our mission and the leadership team behind the school in JP Nagar, Bengaluru."
        />
        <Toolbar />
        <Box
          sx={{
            // height: "40vh",
            width: "100%",
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
