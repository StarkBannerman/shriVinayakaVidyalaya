import { Box, Grid, Typography } from "@mui/material";
import { ACADEMICS } from "../../content/academics";
import RichText from "../../content/RichText";

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
              {ACADEMICS.introHeading}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "24px" },
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {ACADEMICS.introSubheading}
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
              <RichText
                value={ACADEMICS.introBody}
                strongStyle={{ color: "black" }}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
