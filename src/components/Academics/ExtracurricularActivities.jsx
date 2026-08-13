import { ACADEMICS } from "../../content/academics";
import { Icon } from "../../content/iconRegistry";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.webp";
import { useMediaQueries } from "../../utils/Breakpoints";

// Card colours are design, not content — the editor cannot reach them.
// This preserves the exact per-position sequence the page shipped with, and
// cycles if someone adds more activities than there are entries.
const CARD_COLOURS = [
  {
    cardBgColor: "#FFEAB2",
    cardBorderColor: "#F68820",
    iconBackgroundColor: "#FBBE18",
    dropShadowColor: "#FBBE18",
  },
  {
    cardBgColor: "#B0EBE6",
    cardBorderColor: "#307B74",
    iconBackgroundColor: "#76B7B1",
    dropShadowColor: "#307B74",
  },
  {
    cardBgColor: "#F4EDFF",
    cardBorderColor: "#7214FF",
    iconBackgroundColor: "#C5C4FF",
    dropShadowColor: "#7214FF",
  },
  {
    cardBgColor: "#F4EDFF",
    cardBorderColor: "#7214FF",
    iconBackgroundColor: "#C5C4FF",
    dropShadowColor: "#7214FF",
  },
  {
    cardBgColor: "#B0EBE6",
    cardBorderColor: "#307B74",
    iconBackgroundColor: "#76B7B1",
    dropShadowColor: "#307B74",
  },
];

export default function ExtracurricularActivities() {
  const extracurricularActivities = ACADEMICS.extracurriculars.map((a, i) => ({
    ...a,
    ...CARD_COLOURS[i % CARD_COLOURS.length],
  }));
  const { isMobile } = useMediaQueries();
  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: "#F68820",
            borderRadius: {
              xs: "0px 15px 15px 0px",
              sm: "0px 15px 15px 0px",
              md: "0px 12px 12px 0px",
              lg: "0px 24px 24px 0px",
            },
            minWidth: { sm: "190px", md: "220px", lg: "500px" },
            mr: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: "18px", md: "25px", lg: "42px" },
              color: "#FFF",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {ACADEMICS.extracurricularsHeading}
          </Typography>
        </Box>
        {isMobile ? (
          <img
            src={DownArrow}
            style={{ marginTop: "50px", height: "60px", width: "60px" }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <img
            src={DownArrow}
            style={{ marginTop: "90px" }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        )}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: "95%",
            mt: 2,
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "24px" },
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {ACADEMICS.extracurricularsSubheading}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 400,
                textAlign: "center",
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
                // width: { xs: "90%", sm: "80%", md: "60%" },
              }}
            >
              {ACADEMICS.extracurricularsIntro}
            </Typography>
          </Grid>

          {extracurricularActivities.map((activity) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box sx={{ position: "relative", width: "100%", zIndex: 1 }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "-35px", // Adjust this to place the icon box above the main box
                    left: "15%",
                    transform: "translateX(-50%)",
                    height: "70px",
                    width: "70px",
                    border: "2px solid black",
                    backgroundColor: activity?.iconBackgroundColor,
                    borderRadius: "12px",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 2,
                  }}
                >
                  <IconButton sx={{ color: "#000" }}>
                    <Icon
                      name={activity?.icon}
                      sx={{ height: "30px", width: "30px" }}
                    />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    backgroundColor: activity?.cardBgColor,
                    border: `2px solid ${activity?.cardBorderColor}`,
                    boxShadow: `8px 8px 0 ${activity?.dropShadowColor}`,
                    borderRadius: "12px",
                    height: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pl: 3,
                    pr: 3,
                    mt: "35px", // Add margin to the main box to prevent overlap with the icon box
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "28px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {activity?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      textAlign: "justify",
                      mt: 2,
                    }}
                  >
                    {activity?.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
