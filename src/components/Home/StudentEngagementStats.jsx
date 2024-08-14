import { Box, Grid, IconButton, Typography } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import StudentStatsImage from "../../assets/studentStatsImage.png";
export default function StudentEngagementStats() {
  return (
    <Grid container sx={{ width: "100vw", mb: 10 }}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img src={StudentStatsImage} height={"650px"} width={"650px"} />
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
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Typography sx={{ fontSize: "50px", fontWeight: 700 }}>
            Student Engagement Program
          </Typography>
        </Box>

        {/* Stats Boxes  */}

        <Box
          sx={{
            height: "430px",
            width: "550px",
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
                    borderRadius: "20px 20px 0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "50px", fontWeight: 700, color: "#FFF" }}
                  >
                    35+
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "38%",
                    height: "90%",
                    borderRadius: "20px",
                    backgroundColor: "#5C76B2",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <IconButton>
                    <InsightsIcon
                      sx={{ height: "40px", width: "40px", color: "#FFF" }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "60%",
                  backgroundColor: "#5C76B2",
                  borderRadius: "0px 20px 20px 20px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "25px", fontWeight: 500, color: "#FFF" }}
                >
                  Years of Experience
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "90%",
                width: "30%",
                backgroundColor: "#7214FF99",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "50px", fontWeight: 700, color: "#FFF" }}
              >
                50+
              </Typography>
              <Typography
                sx={{ fontSize: "25px", fontWeight: 500, color: "#FFF" }}
              >
                Staffs
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
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "50px", fontWeight: 700, color: "#FFF" }}
              >
                42000+
              </Typography>
              <Typography
                sx={{ fontSize: "25px", fontWeight: 700, color: "#FFF" }}
              >
                Students Successful in their career
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
