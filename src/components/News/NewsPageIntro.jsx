"use client";
import { Box, Typography } from "@mui/material";

export default function NewsEvents() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 4 },
        boxSizing: "border-box",
        mt: 5,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 700,
            color: "#000000",
            mb: 1,
          }}
        >
          News & Events
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.125rem", md: "1.375rem" },
            fontWeight: 500,
            color: "#333333",
            mb: 2,
          }}
        >
          Embracing Learning with Discovery and Joy
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
            color: "#555555",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.5,
          }}
        >
          Welcome to our News & Events page, where the magic of childhood comes
          alive through the enriching experiences and adventures that our
          students embark on each day. At our school, we believe that learning
          goes beyond textbooks, and we strive to create a holistic and engaging
          environment that nurtures every aspect of a child's development.
        </Typography>
      </Box>
    </Box>
  );
}
