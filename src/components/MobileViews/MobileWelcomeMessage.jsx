import { Box, Grid, Typography, Button } from "@mui/material";
import GroupStudentImage from "../../assets/groupStudentImage.png";
export default function MobileWelcomeMessage() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", width: "100vw" }}>
      <Grid
        container
        sx={{
          width: "90vw",
          mt: 4,
          gap: 1,
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5.5}
          lg={5.5}
          xl={5.5}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Welcome to Shri Vinayaka Vidyalaya
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "center",
                color: "#737373",
                mt: 2,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                color: "#FFF",
                backgroundColor: "#F68820",
                // width: "180px",
                height: "40px",
                boxShadow: "none",
                borderRadius: "8px",
                mt: 3,
              }}
            >
              View More
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6.5}
          lg={6.5}
          xl={6.5}
          sx={{
            mt: 2,
            placeItems: "center",
          }}
        >
          <img
            src={GroupStudentImage}
            maxHeight={"330px"}
            maxWidth={"370px"}
            height={"100%"}
            width={"100%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
