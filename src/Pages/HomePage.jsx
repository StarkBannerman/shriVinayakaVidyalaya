import { Box, Toolbar, Typography } from "@mui/material";
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
import { useRef } from "react";

export default function HomePage() {
  const carouselRef = useRef(null);
  const bannerRef = useRef(null);
  const welcomeRef = useRef(null);
  const facilitiesRef = useRef(null);
  const expertiseRef = useRef(null);
  const achievementsRef = useRef(null);
  const statsRef = useRef(null);
  const feedbackRef = useRef(null);
  const eventsRef = useRef(null);

  const handleMenuClick = (section) => {
    const refMap = {
      Home: carouselRef,
      "News & Events": eventsRef,
      About: bannerRef,
      Academics: facilitiesRef,
      Admission: expertiseRef,
      Testimonials: feedbackRef,
    };

    const sectionRef = refMap[section];

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        <MenuBar onMenuClick={handleMenuClick} />
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
          ref={carouselRef}
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
              ref={bannerRef}
            />
          </Box>
        </Box>

        <ScrollableBanner />
        <WelcomeMessage ref={welcomeRef} />

        <Box ref={facilitiesRef}>
          <Facilities />
        </Box>
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
        <Box ref={feedbackRef}>
          <ParentsFeedback />
        </Box>
        <Box ref={eventsRef}>
          <NewsFunction />
        </Box>
        {/* <JoinCommunity /> */}
        <Box
          sx={{
            height: "50px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F68820", // Optional: Customize the background color
          }}
        >
          <Typography
            variant="body2"
            component="a"
            href="https://convobox.in"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#FFF",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline", // Optional: Add an underline on hover
              },
            }}
          >
            Designed and Developed by{" "}
            <span style={{ fontWeight: 700 }}>ConvoBox</span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
