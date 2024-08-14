import { Box } from "@mui/material";
import experienceLogo from "../../assets/Experience.png";
import CaroselImage from "../../assets/bannerImage.jpg";
import LineGroup from "../../assets/lineGroup.png";

export default function PictureCarousel() {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          height: "90%",
          backgroundColor: "#FFEAC1",
          borderRadius: "30px",
          position: "relative",
          //   overflow: "hidden", // Prevent overflow
        }}
      >
        {/* Box with the Pin Image */}
        <Box
          sx={{
            height: "150px",
            width: "150px",
            position: "absolute",
            mt: -5, // Move it 10px outside from the top
            ml: -5, // Move it 10px outside from the left
            zIndex: 1,
          }}
        >
          <img src={experienceLogo} width="100%" height="100%" />
        </Box>

        {/* Box to show the Image Carousel  */}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            bottom: "-20px",
            right: "-20px",
            backgroundColor: "transparent",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow to the carousel box
            overflow: "hidden", // Prevent overflow
          }}
        >
          <img
            src={CaroselImage}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // Ensures the image fits inside without being stretched
              objectPosition: "center", // Center the image inside the box
            }}
            alt="Carousel"
          />
        </Box>
      </Box>
    </>
  );
}
