import { Box, IconButton, Typography } from "@mui/material";
import FiberNewIcon from "@mui/icons-material/FiberNew";

export default function MobileScrollabeBanner() {
  return (
    <Box
      sx={{
        height: "50px",
        mt: 2,
        width: "100vw",
        backgroundColor: "#F68820",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          whiteSpace: "nowrap",
          width: "100vw", // Ensure enough width for smooth scrolling
          animation: "scrolling 15s linear infinite",
          transform: "translateX(100%)", // Start from the right edge
        }}
      >
        {/* First set of content */}
        <Box sx={{ display: "flex", alignItems: "center", ml: -2 }}>
          <IconButton sx={{ color: "#FFF" }}>
            <FiberNewIcon sx={{ height: "30px", width: "30px" }} />
          </IconButton>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
              margin: "0 20px",
            }}
          >
            Registrations Now Open for 11th Standard - CBSE - At all our
            branches!   Academic Year 2024-25. Streams: Science | Commerce |
            Humanities
          </Typography>
        </Box>
      </Box>

      <style>
        {`
          @keyframes scrolling {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Box>
  );
}
