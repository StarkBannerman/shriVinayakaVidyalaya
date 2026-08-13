import { Box, Toolbar } from "@mui/material";
import MobileMenuBar from "../components/MobileViews/MobileMenuBar";
import MobilePictureCarousel from "../components/MobileViews/MobilePictureCarosel";
import LineGroup from "../assets/lineGroup.webp";
import Thunder from "../assets/thunder.webp";
import MobileScrollabeBanner from "../components/MobileViews/MobileScrollabeBanner";
import MobileWelcomeMessage from "../components/MobileViews/MobileWelcomeMessage";
import MobileFacilities from "../components/MobileViews/MobileFacilities";
import MobileSchoolExpertise from "../components/MobileViews/MobileSchoolExpertise";
import MobileAcheivements from "../components/MobileViews/MobileAchivements";
import waveRing from "../assets/waveRing.webp";
import MobileEngagementStats from "../components/MobileViews/MobileEngagementStats";
import MobileParentsFeedback from "../components/MobileViews/MobileParentsFeedback";
import MobileNewsEvent from "../components/MobileViews/MobileNewsEvents";
import backgroundDoodle from "../assets/backgroundDoodle.webp";
import { useRef } from "react";
import Footer from "../components/Common/Footer";
import Seo from "../components/Common/Seo";

export default function MobileHomePage() {
  const carouselRef = useRef(null);
  const bannerRef = useRef(null);
  const welcomeRef = useRef(null);
  const facilitiesRef = useRef(null);
  const expertiseRef = useRef(null);
  const feedbackRef = useRef(null);
  const eventsRef = useRef(null);

  return (
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
      <MobileMenuBar />
      <Seo description="Shri Vinayaka Vidyalaya, established in 1990, is a school in JP Nagar 7th Phase, Bengaluru offering primary and secondary education with well-equipped labs, a library and sports facilities." />
      <Toolbar />
      <Box
        ref={carouselRef}
        sx={{
          width: "100%",
          overflowX: "hidden",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MobilePictureCarousel />
      </Box>
      <Box
        ref={bannerRef}
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
            ml: 1,
            width: "70px",
            height: "40px", // Maintain aspect ratio
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
            loading="lazy"
            decoding="async"
          />
        </Box>
        <Box sx={{ mt: -3, mr: 2 }}>
          <img
            src={Thunder}
            style={{
              width: "80px", // Scale the image to fit the container's width
              height: "50px", // Maintain the aspect ratio of the image
            }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </Box>
      </Box>
      <MobileScrollabeBanner ref={bannerRef} />
      <MobileWelcomeMessage ref={welcomeRef} />
      <Box ref={facilitiesRef}>
        <MobileFacilities />
      </Box>
      <MobileSchoolExpertise ref={expertiseRef} />
      <MobileAcheivements />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          mb: 5,
          mt: 1,
          ml: -3,
        }}
      >
        <img
          src={waveRing}
          height={"100px"}
          width={"100px"}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </Box>
      <MobileEngagementStats />
      <Box ref={feedbackRef}>
        <MobileParentsFeedback />
      </Box>
      <Box ref={eventsRef}>
        <MobileNewsEvent />
      </Box>
      {/* <Box
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
      </Box> */}
      <Footer />
    </Box>
  );
}
