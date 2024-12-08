import { Box, Typography } from "@mui/material";
import experienceLogo from "../../assets/Experience.png";
import CaroselImage from "../../assets/bannerImage.jpg";
import LineGroup from "../../assets/lineGroup.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
// import banner1 from "../../assets/laptopBanner1.jpg";
import banner2 from "../../assets/Banner2.JPG";
import banner1 from "../../assets/Banner4.JPG";
import banner3 from "../../assets/Banner3.JPG";

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
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            stopOnHover
            dynamicHeight={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = {
                marginLeft: 8,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#FFEAC1", // Default dot color
                cursor: "pointer",
                display: "inline-block",
              };
              const style = isSelected
                ? { ...defStyle, backgroundColor: "#FFF" } // Highlighted dot color
                : defStyle;
              return (
                <li
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  aria-label={`${label} ${index + 1}`}
                  tabIndex={0}
                />
              );
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                minHeight: "600px",
                pointerEvents: "auto", // Allow carousel to receive pointer events
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "70px",
                  fontWeight: 700,
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  width: "100%",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                Your Future Begins Here ...
              </Typography>
              <img
                src={banner1}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Adjust to cover the area without distortion
                }}
                alt="Carousel"
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
                pointerEvents: "auto", // Allow carousel to receive pointer events
              }}
            >
              <img
                src={banner2}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Adjust to cover the area without distortion
                }}
                alt="Carousel"
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
                pointerEvents: "auto", // Allow carousel to receive pointer events
              }}
            >
              <img
                src={banner3}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Adjust to cover the area without distortion
                }}
                alt="Carousel"
              />
            </div>
          </Carousel>
        </Box>
      </Box>
    </>
  );
}
