import { Box, Grid, Typography, Button } from "@mui/material";
import GroupStudentImage from "../../assets/studentEngagement.webp";
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
              Welcome to Shri Vinayaka Vidyalaya – One of the Best Schools in
              Bangalore
            </Typography>
            {/* <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                color: "#000",
                mt: 2,
              }}
            >
              विद्या ददाति विनयं विनयाद् याति पात्रताम्।
            </Typography> */}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                color: "#000",
                mt: 1,
              }}
            >
              {/* पात्रत्वात् धनमाप्नोति धनात् धर्मं ततः सुखम्॥ */}
              "Celebrating Diversity, Inspiring Excellence, and Building the
              Future.”
            </Typography>
            {/* <Typography
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
              "Celebrating Diversity, Inspiring Excellence, and Building the
              Future.”
            </Typography> */}

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
              Shri Vinayaka Vidyalaya, one of the leading co-educational schools
              in Bangalore, has been a trusted name in education for over 35
              years. Located in the heart of JP Nagar, Bangalore, our school
              offers a balanced approach to academics, sports, and
              extracurricular activities. We are dedicated to providing
              high-quality education that nurtures every child's potential,
              equipping them with skills for the future. Whether you're looking
              for the best school for girls in Bangalore or the best school for
              boys in Bangalore, Shri Vinayaka Vidyalaya offers an inclusive,
              student-centered environment where every child can thrive.
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
            alt="Students of Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
