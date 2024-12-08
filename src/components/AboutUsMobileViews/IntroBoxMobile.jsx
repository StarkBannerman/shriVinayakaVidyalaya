import { Box, Grid, Typography } from "@mui/material";
import studentEnagement from "../../assets/aboutPageIcon.JPG";
import studeImage from "../../assets/aboutPageIcon2.JPG";

export default function MobileIntroBox() {
  return (
    <Box
      sx={{
        width: "90%",
        height: "auto",
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
          height: "auto",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for tablet and above
        }}
      >
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
              About us
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for smaller screens
                fontWeight: 700,
                textAlign: "justify",
                color: "#000",
                mt: 2,
              }}
            >
              "Education bestows humility, from humility comes worthiness. With
              worthiness, one attains wealth, and with wealth, one is able to
              follow dharma, which ultimately leads to happiness.”
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for smaller screens
                fontWeight: 400,
                textAlign: "justify",
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
              }}
            >
              Welcome to the school that celebrates children in their own
              uniqueness and builds their future along with them. We instill a
              sense of pride about the country, culture, traditions and most
              importantly, build a foundation for their free thoughts, ideas,
              concepts, philosophies, science, mathematics, art, a way of life
              and more. We are inspired by our country that has taught the
              world.
            </Typography>
          </Box>
        </Grid>

        {/* First Image (Circle) */}

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
