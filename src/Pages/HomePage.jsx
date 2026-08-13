import { Box, Toolbar } from "@mui/material";
import PictureCarousel from "../components/Home/PictureCarousel";
import LineGroup from "../assets/lineGroup.webp";
import Thunder from "../assets/thunder.webp";
import ScrollableBanner from "../components/Home/scrollableBanner";
import WelcomeMessage from "../components/Home/WelcomeMessage";
import Facilities from "../components/Home/Facilities";
import SchoolExpertise from "../components/Home/SchoolExpertise";
import waveRing from "../assets/waveRing.webp";
import StudentEngagementStats from "../components/Home/StudentEngagementStats";
import ParentsFeedback from "../components/Home/ParentsFeedback";
import NewsFunction from "../components/Home/NewsEvents";
import backgroundDoodle from "../assets/backgroundDoodle.webp";
import { useRef } from "react";
import Footer from "../components/Common/Footer";
import Menu from "../components/Common/Menu";
import Seo from "../components/Common/Seo";

export default function HomePage() {
  const carouselRef = useRef(null);
  const bannerRef = useRef(null);
  const welcomeRef = useRef(null);
  const facilitiesRef = useRef(null);
  const feedbackRef = useRef(null);
  const eventsRef = useRef(null);

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
        <Menu />
        <Seo description="Shri Vinayaka Vidyalaya, established in 1990, is a school in JP Nagar 7th Phase, Bengaluru offering primary and secondary education with well-equipped labs, a library and sports facilities." />
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
              loading="lazy"
              decoding="async"
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
              alt=""
              loading="lazy"
              decoding="async"
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
          <img
            src={waveRing}
            height={"180px"}
            width={"180px"}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </Box>
        <StudentEngagementStats />
        <Box ref={feedbackRef}>
          <ParentsFeedback />
        </Box>
        <Box ref={eventsRef}>
          <NewsFunction />
        </Box>

        <Footer />
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
      </Box>
    </>
  );
}
