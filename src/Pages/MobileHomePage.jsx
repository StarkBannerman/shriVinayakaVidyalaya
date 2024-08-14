import { Box, Toolbar } from "@mui/material";
import MobileMenuBar from "../components/MobileViews/MobileMenuBar";
import MobilePictureCarousel from "../components/MobileViews/MobilePictureCarosel";
import LineGroup from "../assets/lineGroup.png";
import Thunder from "../assets/thunder.png";
import ScrollableBanner from "../components/Home/scrollableBanner";
import MobileScrollabeBanner from "../components/MobileViews/MobileScrollabeBanner";
import MobileWelcomeMessage from "../components/MobileViews/MobileWelcomeMessage";
import MobileFacilities from "../components/MobileViews/MobileFacilities";
import MobileSchoolExpertise from "../components/MobileViews/MobileSchoolExpertise";
import MobileAcheivements from "../components/MobileViews/MobileAchivements";
export default function MobileHomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FFF7E1",
        boxSizing: "border-box", // Ensures padding and borders are included in width
        overflowX: "hidden", // Prevents horizontal overflow
      }}
    >
      <MobileMenuBar />
      <Toolbar />
      <Box
        sx={{
          height: "90vh",
          maxHeight: "500px",
          width: "100%", // Set width to 100% to prevent overflow
          overflowX: "hidden", // Prevents any content inside from overflowing
          display: "grid",
          placeItems: "center",
          mt: 5,
        }}
      >
        <MobilePictureCarousel />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            mt: -3,
            //   ml: 5,
            width: "70px",
            height: "auto", // Maintain aspect ratio
            zIndex: 1, // Ensure it's above other content if needed
          }}
        >
          <img
            src={LineGroup}
            alt="Line Group"
            style={{
              width: "34px", // Scale the image to fit the container's width
              height: "40px", // Maintain the aspect ratio of the image
            }}
          />
        </Box>
        <Box sx={{ mt: -3, mr: 2 }}>
          <img
            src={Thunder}
            style={{
              width: "80px", // Scale the image to fit the container's width
              height: "50px", // Maintain the aspect ratio of the image
            }}
          />
        </Box>
      </Box>
      <MobileScrollabeBanner />
      <MobileWelcomeMessage />
      <MobileFacilities />
      <MobileSchoolExpertise />
      <MobileAcheivements />
    </Box>
  );
}
