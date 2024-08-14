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
