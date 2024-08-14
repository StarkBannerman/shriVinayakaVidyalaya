import { Box, Toolbar } from "@mui/material";
import MenuBar from "../components/Home/MenuBar";
import PictureCarousel from "../components/Home/PictureCarousel";
import LineGroup from "../assets/lineGroup.png";
import Thunder from "../assets/thunder.png";
import ScrollableBanner from "../components/Home/scrollableBanner";
import WelcomeMessage from "../components/Home/WelcomeMessage";
import JigsawBoxes from "../components/Home/JigsawBoxes";
import Facilities from "../components/Home/Facilities";
import SchoolExpertise from "../components/Home/SchoolExpertise";
import waveRing from "../assets/waveRing.png";
import StudentEngagementStats from "../components/Home/StudentEngagementStats";
import ParentsFeedback from "../components/Home/ParentsFeedback";
import NewsFunction from "../components/Home/NewsEvents";
import JoinCommunity from "../components/Home/JoinCommunityCard";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#FFF7E1",
          boxSizing: "border-box", // Ensures padding and borders are included in width
          overflowX: "hidden", // Prevents horizontal overflow
        }}
      >
        <MenuBar />
        <Toolbar />
        <Box
          sx={{
            height: "90vh",
            width: "100%", // Set width to 100% to prevent overflow
            overflowX: "hidden", // Prevents any content inside from overflowing
            display: "grid",
            placeItems: "center",
            mt: 5,
          }}
        >
          <PictureCarousel />
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
              mt: -4,
              ml: 5,
              width: "70px",
              height: "auto", // Maintain aspect ratio
              zIndex: 1, // Ensure it's above other content if needed
            }}
          >
            <img
              src={LineGroup}
              alt="Line Group"
              style={{
                width: "70px", // Scale the image to fit the container's width
                height: "80px", // Maintain the aspect ratio of the image
              }}
            />
          </Box>
          <Box sx={{ mt: -2, mr: 4 }}>
            <img
              src={Thunder}
              style={{
                width: "100px", // Scale the image to fit the container's width
                height: "80px", // Maintain the aspect ratio of the image
              }}
            />
          </Box>
        </Box>

        <ScrollableBanner />
        <WelcomeMessage />

        <Facilities />

        <SchoolExpertise />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            mb: 5,
          }}
        >
          <img src={waveRing} height={"180px"} width={"180px"} />
        </Box>
        <StudentEngagementStats />
        <ParentsFeedback />
        <NewsFunction />
        <JoinCommunity />
      </Box>
    </>
  );
}
