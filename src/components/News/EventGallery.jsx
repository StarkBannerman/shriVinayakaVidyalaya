import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * The photo slideshow on an event's page.
 *
 * The cover photo is always slide one, followed by any gallery photos. Gallery
 * photos come from Sanity's CDN rather than the bundle — see the note in
 * scripts/fetch-content.mjs. They are lazy-loaded, so the CDN round trip is
 * paid only if the visitor scrolls to them.
 *
 * With no gallery photos this renders a single static image and no carousel
 * chrome, so a one-photo event does not look broken.
 */
export default function EventGallery({ event }) {
  const slides = [
    { src: event.image, alt: event.imageAlt, caption: "" },
    ...event.gallery.map((g) => ({ src: g.full, alt: g.alt, caption: g.caption })),
  ];

  const frame = {
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#EEE",
  };

  if (slides.length === 1) {
    return (
      <Box sx={frame}>
        <img
          src={slides[0].src}
          alt={slides[0].alt}
          width="1000"
          height="600"
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
        />
      </Box>
    );
  }

  return (
    <Box sx={frame}>
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={slides.length > 1}
        statusFormatter={(current, total) => `${current} of ${total}`}
        infiniteLoop
        useKeyboardArrows
        emulateTouch
        dynamicHeight
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <li
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              margin: "0 4px",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: isSelected ? "#F68820" : "rgba(255,255,255,0.7)",
            }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
            key={index}
          />
        )}
      >
        {slides.map((slide, i) => (
          <div key={i}>
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
            {slide.caption ? (
              <Typography
                className="legend"
                sx={{ fontSize: "14px" }}
              >
                {slide.caption}
              </Typography>
            ) : null}
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
