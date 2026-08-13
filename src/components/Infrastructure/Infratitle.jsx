import { INFRASTRUCTURE } from "../../content/infrastructure";
import { Box, Grid, Typography } from "@mui/material";

export default function InfraTitle() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for tablet and above
        }}
      >
        {/* Text Section */}
        <Grid item xs={12} sm={8} md={6}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "50px" }, // Smaller font size on tablet
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {INFRASTRUCTURE.introHeading}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for smaller screens
                fontWeight: 400,
                textAlign: { xs: "justify", sm: "justify", md: "center" },
                width: "90%",
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
              }}
            >
              {INFRASTRUCTURE.introBody}
            </Typography>
          </Box>
        </Grid>

        {/* Second Image (Semi-circle) */}
      </Grid>
    </Box>
  );
}
