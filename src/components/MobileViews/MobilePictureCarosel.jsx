import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import CaroselImage from "../../assets/bannerImage.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

export default function MobilePictureCarousel() {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          height: "90%",
          maxHeight: "500px",
          backgroundColor: "#FFEAC1",
          borderRadius: "10px",
          position: "relative",
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
          //   style={{ height: "100%", width: "100%" }} // Ensures the Carousel occupies the full Box
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              minHeight: "500px",
            }}
            tyle
          >
            <img
              src={CaroselImage}
              style={{
                height: "100%",
                width: "100%",
                // objectFit: "contain",
                //   objectPosition: "center",
              }}
              alt="Carousel"
            />
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <img
              src={CaroselImage}
              style={{
                height: "100%",
                width: "100%",
                // objectFit: "contain",
                // objectPosition: "center",
              }}
              alt="Carousel"
            />
          </div>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "red" }}
          >
            <img
              src={CaroselImage}
              style={{
                height: "100%",
                width: "100%",
                // objectFit: "contain",
                // objectPosition: "center",
              }}
              alt="Carousel"
            />
          </div>
        </Carousel>
      </Box>
    </>
  );
}
