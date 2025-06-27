import { Box, Grid, Typography } from "@mui/material";

export default function AcademicsIntroBox() {
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
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={12} sm={8} md={8}>
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
                fontSize: { xs: "28px", sm: "36px", md: "50px" },
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Academics
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "24px" },
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Nurturing Young Minds for Success
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 400,
                textAlign: { xs: "justify", sm: "justify", md: "justify" },
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
                width: { xs: "90%", sm: "80%", md: "100%" },
              }}
            >
              At{" "}
              <strong style={{ color: "black" }}>
                Shri Vinayaka Vidyalaya
              </strong>
              , we believe academics should do more than inform — they should{" "}
              <strong style={{ color: "black" }}>transform</strong>. For over 35
              years, we’ve blended rigorous academics with deep-rooted values,
              nurturing students who think critically, care deeply, and grow
              intentionally. Our classrooms are not bound by four walls or
              textbook pages. They are{" "}
              <strong style={{ color: "black" }}>
                alive with dialogue, discovery, and reflection
              </strong>
              . Every lesson — whether in Math, Science, or Language — is
              designed to spark curiosity, build resilience, and connect
              knowledge to real life. What makes SVV different is the{" "}
              <strong style={{ color: "black" }}>
                balance we create between intellect and integrity
              </strong>
              . We don’t just teach students to top exams; we guide them to{" "}
              <strong style={{ color: "black" }}>
                lead with empathy, question boldly, and learn for life
              </strong>
              .
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
