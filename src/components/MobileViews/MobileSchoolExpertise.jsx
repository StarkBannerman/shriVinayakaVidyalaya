import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SchoolBackground from "../../assets/schoolBanner.JPG";
// import Facilities from "./Facilities";
// import ExpertiseLinkCard from "./ExpertiseLinkCard";
import OwlIcon from "../../assets/owlIcon.png";
import telescopeIcon from "../../assets/telescopeIcon.png";
import computerIcon from "../../assets/computerIcon.png";

export default function MobileSchoolExpertise() {
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
        maxHeight: "470px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F6882080",
          minHeight: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            color: "#FFF",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Our Expertise in Education
        </Typography>
      </Box>
    </Box>
  );
}
