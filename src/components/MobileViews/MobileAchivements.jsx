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
      paragraph: `The school was established in 1990 by the late Sri Doddamani Dasarath and his wife Smt. Sumathi Doddamani with a clear vision: to offer high-quality English medium education to children in the community at an affordable cost. Our mission is to nurture the intellectual, moral, physical, and social growth of our students. Committed to continuous improvement, we regularly evaluate and refine our practices to ensure we provide the best possible education as we move forward.`,
      heading: "35 Years of Experience ",
      link: "#",
    },
    {
      icon: telescopeIcon,
      paragraph: ``,
      listItems: [
        "Swimming",
        "Taek-won-do",
        " Vedic Math",
        "Abacus",
        "Konakkol",
        "Bhajans",
        "Free style Dancing",
      ],
      heading: "Extra curricular activities",
      link: "#",
    },
    {
      icon: computerIcon,
      paragraph: ``,
      subItems: [
        {
          subHeading: "Confluenze",
          paragraph:
            "Every hidden ability and talent of every single child reveals itself and blossoms out at this unique and fun-filled platform.",
        },
        {
          subHeading: "Utopia",
          paragraph:
            "This is our interschool cultural extravaganza. This flagship event has been conducted by us since 2002.",
        },
      ],
      heading: "Annual Flagship Events ",
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
