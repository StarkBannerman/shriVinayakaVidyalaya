import { ABOUT } from "../../content/about";
import { Box, Typography } from "@mui/material";
import historyBackground from "../../assets/historyBackground.webp";
import schoolBackground from "../../assets/schollBackground.webp";

export default function History() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "auto", md: "600px" }, // Auto height for small screens
        backgroundColor: "#FFF7E1",
        boxSizing: "border-box",
        overflow: "hidden", // Prevents overflow
        backgroundImage: `url(${historyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        mt: 10,
        mb: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#31313199",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "80%" }, // Full width for small screens, 80% for larger
            height: { xs: "auto", md: "70%" }, // Auto height for small screens
            backgroundColor: "#FFF",
            borderRadius: "10px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column for small screens, row for larger screens
            p: 2,
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" }, // Full width on small screens, 60% on larger
              height: "90%",
              p: { xs: 1, md: 2 }, // Padding adjustments for responsiveness
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "50px" }, // Smaller font size for small screens
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              {ABOUT.historyHeading}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" }, // Adjust font size for different screens
                fontWeight: 400,
                textAlign: "left",
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
              }}
            >
              {ABOUT.historyBody}
            </Typography>
          </Box>

          {/* Image Section */}
          <Box
            component="img"
            src={schoolBackground}
            sx={{
              width: { xs: "100%", md: "40%" }, // Full width on small screens, 40% on larger screens
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover", // Ensures the image covers the box and maintains aspect ratio
              mt: { xs: 2, md: 0 }, // Adds margin on top for mobile screens
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
