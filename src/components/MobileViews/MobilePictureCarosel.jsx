import { Box, Typography } from "@mui/material";
import { HOME } from "../../content/home";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

export default function MobilePictureCarousel() {
  return (
    <Box
      sx={{
        width: "90%",
        height: "90%",
        backgroundColor: "#FFEAC1",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        pointerEvents: "none", // Allow underlying content to receive pointer events
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
        {HOME.heroSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              height: "100%",
              width: "100%",
              ...(index === 0 ? { minHeight: "600px" } : {}),
              pointerEvents: "auto", // Allow carousel to receive pointer events
            }}
          >
            {slide.caption ? (
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "30px",
                  fontWeight: 700,
                  position: "absolute",
                  top: "70%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  width: "90%",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {slide.caption}
              </Typography>
            ) : null}
            <img
              src={slide.mobileImage}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover", // Adjust to cover the area without distortion
              }}
              alt={slide.alt || "Carousel"}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
