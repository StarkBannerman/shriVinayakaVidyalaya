import { HOME } from "../../content/home";
import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SchoolBackground from "../../assets/schoolBanner.webp";
import ExpertiseLinkCard from "./ExpertiseLinkCard";
import OwlIcon from "../../assets/owlIcon.webp";
import telescopeIcon from "../../assets/telescopeIcon.webp";
import computerIcon from "../../assets/computerIcon.webp";
import { useInViewOnce } from "../../hooks/useInView";

const EXPERTISE_ICONS = [OwlIcon, telescopeIcon, computerIcon];

export default function SchoolExpertise() {
  const cardData = HOME.expertise.map((c, i) => ({
    ...c,
    icon: EXPERTISE_ICONS[i % EXPERTISE_ICONS.length],
  }));

  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const { isInView: titleInView } = useInViewOnce(titleRef);
  const { isInView: cardsInView } = useInViewOnce(cardsRef);

  return (
    <Box
      sx={{
        backgroundImage: `url(${SchoolBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        mt: -10,
      }}
    >
      <Box
        sx={{
          width: "45%",
          backgroundColor: "#F6882080",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box ref={titleRef}>
            <Typography
              sx={{
                fontSize: "50px",
                color: "#FFF",
                fontWeight: 700,
                mb: 3,
                ml: 10,
                textAlign: "left",
                opacity: titleInView ? 1 : 0,
                transform: titleInView ? "translateY(0)" : "translateY(50px)",
                transition: "opacity 1s ease-out, transform 1s ease-out",
                animation: titleInView ? "bounce 1s ease-out" : "none",
              }}
            >
              {HOME.expertiseHeading}
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          ref={cardsRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: "300px",
            width: "100vw",
            gap: 2,
          }}
        >
          {cardData.map((cardDetails, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={3}
              xl={3}
              key={index}
              sx={{
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView
                  ? "translateY(0) rotate(0deg)"
                  : "translateY(50px) rotate(10deg)",
                transition: `opacity 1s ease-out ${
                  index * 0.2
                }s, transform 1s ease-out ${index * 0.2}s`,
              }}
            >
              <ExpertiseLinkCard cardDetails={cardDetails} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// Add keyframes for the bounce animation
const keyframes = `
  @keyframes bounce {
    0% {
      transform: translateY(50px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

// Inject the keyframes into the document
const style = document.createElement("style");
style.type = "text/css";
style.innerHTML = keyframes;
document.head.appendChild(style);
