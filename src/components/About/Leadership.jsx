import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInView";
import LeaderShipImage from "../../assets/LeadershipImage.webp";

export default function LeaderShip() {
  const welcomeRef = useRef(null);
  const { hasAnimated } = useInViewOnce(welcomeRef); // Use the updated hook

  return (
    <Box
      ref={welcomeRef} // Attach the ref to the Box
      sx={{ display: "grid", placeItems: "center", width: "100vw", mb: 10 }}
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
          <Box>
            <Typography
              sx={{ fontSize: "50px", fontWeight: 700, width: "90%" }}
            >
              Why Shri Vinayaka Vidyalaya?
            </Typography>

            <Typography
              sx={{ fontSize: "30px", fontWeight: 700, width: "90%", mt: 2 }}
            >
              Experienced Faculty
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
              "Our teachers are the heart of our school. Known for their passion
              and dedication, they ensure that each child receives personalized
              attention. "
            </Typography>

            <Typography
              sx={{ fontSize: "30px", fontWeight: 700, width: "90%", mt: 2 }}
            >
              Holistic Curriculum
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
              "We offer a robust curriculum designed for primary schools in
              Bangalore and secondary schools in Bangalore, along with
              extracurricular opportunities. "
            </Typography>

            <Typography
              sx={{ fontSize: "30px", fontWeight: 700, width: "90%", mt: 2 }}
            >
              State-of-the-Art Facilities
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
              "Our campus is equipped with modern infrastructure and facilities
              to support our students' learning, sports, and artistic pursuits.
              "
            </Typography>
          </Box>
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
          <img
            src={LeaderShipImage}
            height="620px"
            width="620px"
            alt="School leadership at Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
