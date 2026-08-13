import React, { useRef } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import StudentStatsImage from "../../assets/welcomeBanner.webp";
import { motion } from "framer-motion";
import { useInViewOnce } from "../../hooks/useInView";

export default function StudentEngagementStats() {
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  const { isInView: imageInView } = useInViewOnce(imageRef);
  const { isInView: statsInView } = useInViewOnce(statsRef);

  return (
    <Grid container sx={{ width: "100vw", mb: 10 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <motion.img
          ref={imageRef}
          src={StudentStatsImage}
          height={"630px"}
          width={"630px"}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: statsInView ? 1 : 0, x: statsInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Box sx={{ width: "550px" }}>
            <Typography sx={{ fontSize: "50px", fontWeight: 700 }}>
              Student Engagement Program
            </Typography>
          </Box>

          {/* Stats Boxes */}
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
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "50px",
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
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: 500,
                      color: "#FFF",
                      width: "60%",
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
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  pl: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "50px", fontWeight: 700, color: "#FFF" }}
                >
                  35+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 500,
                    color: "#FFF",
                    width: "80%",
                  }}
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
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  pl: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "50px", fontWeight: 700, color: "#FFF" }}
                >
                  5000+
                </Typography>
                <Typography
                  sx={{ fontSize: "25px", fontWeight: 700, color: "#FFF" }}
                >
                  Students Successful in their career
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
}
