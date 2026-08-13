import { ABOUT } from "../../content/about";
import { Box, Grid, Typography } from "@mui/material";
import studentEnagement from "../../assets/aboutPageIcon.webp";
import studeImage from "../../assets/aboutPageIcon2.webp";

export default function IntroBox() {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        mt: 5,
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
        {/* First Image (Circle) */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              height: { xs: "100px", sm: "140px", md: "160px" }, // Smaller size on tablet
              width: { xs: "100px", sm: "140px", md: "160px" },
              backgroundImage: `url(${studentEnagement})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "50px" }, // Smaller font size on tablet
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {ABOUT.introHeading}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for smaller screens
                fontWeight: 700,
                textAlign: "center",
                color: "#000",
                mt: 2,
              }}
            >
              {ABOUT.introQuote}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for smaller screens
                fontWeight: 400,
                textAlign: "center",
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
              }}
            >
              {ABOUT.introBody}
            </Typography>
          </Box>
        </Grid>

        {/* Second Image (Semi-circle) */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50% 50% 50% 0%",
              height: { xs: "100px", sm: "140px", md: "160px" }, // Smaller size on tablet
              width: { xs: "100px", sm: "140px", md: "160px" },
              backgroundImage: `url(${studeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
