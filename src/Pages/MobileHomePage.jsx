import { Box, Toolbar, Typography } from "@mui/material";
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
import waveRing from "../assets/waveRing.png";
import MobileEngagementStats from "../components/MobileViews/MobileEngagementStats";
import MobileParentsFeedback from "../components/MobileViews/MobileParentsFeedback";
import MobileNewsEventCard from "../components/MobileViews/MobileEventCards";
import MobileNewsEvent from "../components/MobileViews/MobileNewsEvents";
import { useRef } from "react";

export default function MobileHomePage() {
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
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FFF7E1",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <MobileMenuBar onMenuClick={handleMenuClick} />
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
        {/* LineGroup and Thunder Image Boxes */}
      </Box>
      <MobileScrollabeBanner ref={bannerRef} />
      <MobileWelcomeMessage ref={welcomeRef} />
      <Box ref={facilitiesRef}>
        <MobileFacilities />
      </Box>
      <MobileSchoolExpertise ref={expertiseRef} />
      <MobileAcheivements ref={achievementsRef} />
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
        <img src={waveRing} height={"100px"} width={"100px"} />
      </Box>
      <MobileEngagementStats ref={statsRef} />
      <Box ref={feedbackRef}>
        <MobileParentsFeedback />
      </Box>
      <Box ref={eventsRef}>
        <MobileNewsEvent />
      </Box>
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
  );
}
