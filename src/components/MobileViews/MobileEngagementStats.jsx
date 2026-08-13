import { Box, Grid, IconButton, Typography } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import StudentStatsImage from "../../assets/welcomeBanner.webp";
export default function MobileEngagementStats() {
  return (
    <Grid container sx={{ width: "100vw", mb: 10 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          display: "flex",
          placeItems: "center",
        }}
      >
        <Box sx={{ width: "95%", height: "320px" }}>
          <img
            src={StudentStatsImage}
            height={"100%"}
            width={"100%"}
            alt="Students at Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{ fontSize: "30px", fontWeight: 700, textAlign: "center" }}
          >
            Student Engagement Program
          </Typography>
        </Box>

        {/* Stats Boxes  */}

        <Box
          sx={{
            height: "260px",
            width: "90%",
            mt: 2,
          }}
        >
          {/* First Row */}
          <Box
            sx={{
              height: "50%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* First Row Inner Box */}
            <Box sx={{ height: "90%", width: "65%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "40%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "60%",
                    backgroundColor: "#5C76B2",
                    borderRadius: "10px 10px 0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: 700,
                      color: "#FFF",
                      ml: 2,
                    }}
                  >
                    200+
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "38%",
                    height: "90%",
                    borderRadius: "10px",
                    backgroundColor: "#5C76B2",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <IconButton>
                    <InsightsIcon
                      sx={{ height: "25px", width: "25px", color: "#FFF" }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "60%",
                  backgroundColor: "#5C76B2",
                  borderRadius: "0px 10px 10px 10px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#FFF",
                    ml: 2,
                  }}
                >
                  Distinctions in just last ten years
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "90%",
                width: "30%",
                backgroundColor: "#7214FF99",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",

                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: 700, color: "#FFF", ml: 1 }}
              >
                35+
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, color: "#FFF", ml: 1 }}
              >
                Years of Experience
              </Typography>
            </Box>
          </Box>
          {/* Second Row */}
          <Box
            sx={{
              height: "50%",
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              sx={{
                height: "90%",
                width: "100%",
                backgroundColor: "#FF9D01",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",

                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: 700, color: "#FFF", ml: 2 }}
              >
                5000+
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFF",
                  textAlign: "center",
                  ml: 2,
                }}
              >
                students successful in their career
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
