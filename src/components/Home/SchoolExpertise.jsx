import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SchoolBackground from "../../assets/schollBackground.png";
import Facilities from "./Facilities";
import ExpertiseLinkCard from "./ExpertiseLinkCard";
import OwlIcon from "../../assets/owlIcon.png";
import telescopeIcon from "../../assets/telescopeIcon.png";
import computerIcon from "../../assets/computerIcon.png";

export default function SchoolExpertise() {
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
    <Box
      sx={{
        backgroundImage: `url(${SchoolBackground})`,
        backgroundSize: "cover", // or 'contain' depending on your needs
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", // Adjust width as needed
        height: "100vh", // Adjust height as needed
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
          // alignItems: "center",
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
          <Box>
            <Typography
              sx={{
                fontSize: "50px",
                color: "#FFF",
                fontWeight: 700,
                mb: 3,
                ml: 10,
                textAlign: "left",
              }}
            >
              Our Expertise in Education
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: "300px",
            width: "100vw",
            // backgroundColor: "red",
            gap: 2,
          }}
        >
          {cardData.map((cardDetails) => (
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <ExpertiseLinkCard cardDetails={cardDetails} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
