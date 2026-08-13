import { HOME } from "../../content/home";
import { Grid, Typography, Box, keyframes } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useInViewOnce } from "../../hooks/useInView";
import sportsLogo from "../../assets/sports.webp";
import scienceLabLogo from "../../assets/scienceLab.webp";
import extracurricularLogo from "../../assets/extracurricular.webp";
import ItLab from "../../assets/Itscience.webp";
import LibraryLogo from "../../assets/Library.webp";

// Define keyframes for the drop-in effect
const dropInAnimation = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(-100px);  // Start from above the view
  }
  100% { 
    opacity: 1; 
    transform: translateY(0);  // End at the original position
  }
`;

const FACILITY_LOGOS = [
  LibraryLogo,
  sportsLogo,
  scienceLabLogo,
  ItLab,
  extracurricularLogo,
];

// Derived once at module scope: HOME is a constant, and keeping this out of
// the component stops the stagger effect re-firing on every render.
const facilities = HOME.facilities.map((f, i) => ({
  name: f.name,
  image: FACILITY_LOGOS[i % FACILITY_LOGOS.length],
}));

export default function Facilities() {
  const facilitiesRef = useRef(null);
  const { isInView } = useInViewOnce(facilitiesRef);
  const [visibleFacilities, setVisibleFacilities] = useState([]);

  // Effect to stagger the visibility of each facility one after the other
  useEffect(() => {
    if (isInView) {
      facilities.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFacilities((prev) => [...prev, index]);
        }, index * 300); // Delay by 300ms for each facility
      });
    }
  }, [isInView]);

  return (
    <Box
      ref={facilitiesRef}
      sx={{ width: "100%", display: "grid", placeItems: "center", mt: 10 }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "80%",
          p: 2,
          backgroundColor: "#FFF",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {facilities.map((facility, index) => (
          <Grid
            key={facility.name}
            item
            xs={6}
            sm={6}
            md={4}
            lg={2}
            xl={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: visibleFacilities.includes(index) ? 1 : 0, // Only show when in view
              animation: visibleFacilities.includes(index)
                ? `${dropInAnimation} 0.8s ease-out forwards`
                : "none", // Trigger the animation
              transition: "transform 0.3s ease, opacity 0.3s ease",
              "&:hover": {
                transform: visibleFacilities.includes(index)
                  ? "scale(1.1)"
                  : "none", // Ensure the hover works only after animation
              },
            }}
          >
            <img
              src={facility.image}
              height="80"
              width="80"
              alt={facility.name}
              style={{
                transition: "transform 0.3s ease", // Separate transition for hover effect
              }}
              loading="lazy"
              decoding="async"
            />
            <Typography sx={{ mt: 1 }}>{facility.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
