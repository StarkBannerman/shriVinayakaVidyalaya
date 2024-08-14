import { Box, Grid, Typography, Button } from "@mui/material";
import GroupStudentImage from "../../assets/welcomeImage.png";
export default function MobileWelcomeMessage() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", width: "100vw" }}>
      <Grid
        container
        sx={{
          width: "90vw",
          mt: 5,
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
                fontWeight: 900,
                textAlign: "center",
              }}
            >
              Welcome to Shri Vinayaka Vidyalaya
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                color: "#000",
                mt: 2,
              }}
            >
              विद्या ददाति विनयं विनयाद् याति पात्रताम्। पात्रत्वात् धनमाप्नोति
              धनात् धर्मं ततः सुखम्॥
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400, // Standard font weight for normal text
                textAlign: "justify", // Justify text alignment
                color: "#737373", // Text color
                lineHeight: 1.6, // Line height for readability
                maxWidth: "600px", // Maximum width for the paragraph
                margin: "0 auto", // Center the paragraph if it has a maxWidth
                mt: 2, // Margin-top for spacing above the paragraph
                mb: 2, // Margin-bottom for spacing below the paragraph
                paddingX: 2, // Optional: horizontal padding for better spacing within the paragraph
              }}
            >
              "Education bestows humility, from humility comes worthiness. With
              worthiness, one attains wealth, and with wealth, one is able to
              follow dharma, which ultimately leads to happiness.” Welcome to
              the school that celebrates children in their own uniqueness and
              builds their future along with them. We instill a sense of pride
              about the country, culture, traditions and most importantly, build
              a foundation for their free thoughts, ideas, concepts,
              philosophies, science, mathematics, art, a way of life and more.
              We are inspired by our country that has taught the world.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                color: "#FFF",
                backgroundColor: "#F68820",
                height: "40px",
                boxShadow: "none",
                borderRadius: "8px",
                mt: 3,
                "&:hover": {
                  // Correct hover syntax
                  color: "#FFF",
                  backgroundColor: "#F68820",
                },
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
            mt: 4,
            placeItems: "center",
          }}
        >
          <img
            src={GroupStudentImage}
            maxHeight={"330px"}
            maxWidth={"390px"}
            height={"100%"}
            width={"100%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
