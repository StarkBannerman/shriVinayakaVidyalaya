import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolBackground from "../../assets/schoolBanner.webp";
// import Facilities from "./Facilities";
// import ExpertiseLinkCard from "./ExpertiseLinkCard";

export default function MobileSchoolExpertise() {
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
