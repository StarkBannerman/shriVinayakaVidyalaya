import { HOME } from "../../content/home";
import React from "react";
import { Grid } from "@mui/material";
import OwlIcon from "../../assets/owlIcon.webp";
import telescopeIcon from "../../assets/telescopeIcon.webp";
import computerIcon from "../../assets/computerIcon.webp";
import MobileExpertiseCard from "./MobileExpertiseCard";

const EXPERTISE_ICONS = [OwlIcon, telescopeIcon, computerIcon];
const cardData = HOME.expertise.map((c, i) => ({
  ...c,
  icon: EXPERTISE_ICONS[i % EXPERTISE_ICONS.length],
}));

export default function MobileAcheivements() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // height: "350px",
        width: "100vw",
        // backgroundColor: "red",
      }}
    >
      {cardData.map((cardDetails) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={2}
          xl={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            mt: 1,
          }}
        >
          <MobileExpertiseCard cardDetails={cardDetails} />
        </Grid>
      ))}
    </Grid>
  );
}
