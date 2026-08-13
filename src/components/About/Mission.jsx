import { ABOUT } from "../../content/about";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInView";
import GroupStudentImage from "../../assets/aboutPageImage.webp";

export default function Mission() {
  const welcomeRef = useRef(null);
  const { hasAnimated } = useInViewOnce(welcomeRef); // Use the updated hook

  return (
    <Box
      ref={welcomeRef} // Attach the ref to the Box
      sx={{ display: "grid", placeItems: "center", width: "100vw" }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}} // Only animate once
      transition={{ duration: 1.5 }}
    >
      <Grid
        container
        sx={{
          width: "90vw",
          mt: 4,
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
          component={motion.div}
          initial={{ x: "-100vw" }}
          animate={hasAnimated ? { x: 0 } : {}} // Only animate once
          transition={{ type: "spring", stiffness: 30 }}
        >
          <img
            src={GroupStudentImage}
            height="450px"
            width="450px"
            alt="Students of Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6.5}
          lg={6.5}
          xl={6.5}
          sx={{ display: "grid", placeItems: "center" }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}} // Only animate once
          transition={{ duration: 1.5 }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "50px", fontWeight: 700, width: "90%" }}
            >
              {ABOUT.missionHeading}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                textAlign: "justify",
                color: "#737373",
                lineHeight: 1.6,
                maxWidth: "600px",
                mt: 2,
                mb: 2,
              }}
            >
              {ABOUT.missionBody}
            </Typography>

            <Typography
              sx={{ fontSize: "50px", fontWeight: 700, width: "90%" }}
            >
              {ABOUT.visionHeading}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                textAlign: "justify",
                color: "#737373",
                lineHeight: 1.6,
                maxWidth: "600px",
                mt: 2,
                mb: 2,
              }}
            >
              {ABOUT.visionBody}
            </Typography>
            {/* <Box
              sx={{
                width: "100%",
                height: "150px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFF",
                  border: "1px solid #F68820",
                  borderRadius: "20px",
                  height: "130px",
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  35 +
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  Years of Experience
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#FFF",
                  border: "1px solid #F68820",
                  borderRadius: "20px",
                  height: "130px",
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  35 +
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  Years of Experience
                </Typography>
              </Box>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
