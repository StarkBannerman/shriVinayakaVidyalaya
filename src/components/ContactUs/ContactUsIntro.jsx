import { Box, Grid } from "@mui/material";
import schoolImage from "../../assets/sportsPageImage.jpeg";

export default function ContactUsIntro() {
  return (
    <Box
      sx={{
        // height: "500px",
        width: "100vw",
        p: 2,
        mt: 10,
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          sx={{
            height: "600px",
            backgroundColor: "blue",
            borderRadius: "16px",
            background:
              "linear-gradient(270.07deg, rgba(255, 255, 255, 0) 0.05%, rgba(44, 43, 41, 0.8) 102.43%)",
            backgroundImage: `url(${schoolImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "16px",
              background:
                "linear-gradient(270.07deg, rgba(255, 255, 255, 0) 0.05%, rgba(44, 43, 41, 0.8) 102.43%)",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
