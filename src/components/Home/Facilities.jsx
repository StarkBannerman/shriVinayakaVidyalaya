import { Grid, Typography, Box, keyframes } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useInViewOnce } from "../../Hooks /useInView";
import TransportFacility from "../../assets/transportFacility.png";
import sportsLogo from "../../assets/sports.png";
import scienceLabLogo from "../../assets/scienceLab.png";
import extracurricularLogo from "../../assets/extracurricular.png";
import ItLab from "../../assets/Itscience.png";
import LibraryLogo from "../../assets/Library.png";

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

export default function Facilities() {
  const facilitiesRef = useRef(null);
  const { isInView } = useInViewOnce(facilitiesRef);
  const [visibleFacilities, setVisibleFacilities] = useState([]);

  const facilities = [
    { name: "Library", image: LibraryLogo },
    { name: "Sports", image: sportsLogo },
    { name: "Science Lab", image: scienceLabLogo },
    { name: "IT Lab", image: ItLab },
    { name: "Extra Curriculars", image: extracurricularLogo },
  ];

  // Effect to stagger the visibility of each facility one after the other
  useEffect(() => {
    if (isInView) {
      facilities.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFacilities((prev) => [...prev, index]);
        }, index * 300); // Delay by 300ms for each facility
      });
    }
  }, [isInView, facilities]);

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
            />
            <Typography sx={{ mt: 1 }}>{facility.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
