import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SchoolBackground from "../../assets/schollBackground.png";
import OwlIcon from "../../assets/owlIcon.png";
import telescopeIcon from "../../assets/telescopeIcon.png";
import computerIcon from "../../assets/computerIcon.png";
import MobileExpertiseCard from "./MobileExpertiseCard";

export default function MobileAcheivements() {
  const cardData = [
    {
      icon: OwlIcon,
      paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I`,
      heading: "35 Years of Experience ",
      link: "#",
    },
    {
      icon: telescopeIcon,
      paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I`,
      heading: "35 Years of Experience ",
      link: "#",
    },
    {
      icon: computerIcon,
      paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I`,
      heading: "35 Years of Experience ",
      link: "#",
    },
  ];
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // height: "300px",
        // width: "100vw",
        // backgroundColor: "red",
      }}
    >
      {cardData.map((cardDetails) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MobileExpertiseCard cardDetails={cardDetails} />
        </Grid>
      ))}
    </Grid>
  );
}
