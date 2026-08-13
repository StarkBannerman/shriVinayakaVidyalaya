import { HOME } from "../../content/home";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInView";
import GroupStudentImage from "../../assets/studentEngagement.webp";

export default function WelcomeMessage() {
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
          <Box>
            <Typography
              sx={{ fontSize: "40px", fontWeight: 700, width: "90%" }}
            >
              {HOME.welcomeHeading}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                textAlign: "left",
                color: "#000",
                mt: 2,
              }}
            >
              {/* विद्या ददाति विनयं विनयाद् याति पात्रताम्। */}
              Celebrating Diversity, Inspiring Excellence, and Building the
              Future.
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
              {HOME.welcomeBody}
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "#FFF",
                backgroundColor: "#F68820",
                width: "180px",
                height: "40px",
                borderRadius: "8px",
                mt: 3,
              }}
              onClick={() => {
                window.open("/about", "_blank");
              }}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
          sx={{ display: "grid", placeItems: "center" }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}} // Only animate once
          transition={{ duration: 1.5 }}
        >
          <img
            src={GroupStudentImage}
            height="620px"
            width="620px"
            alt="Students of Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
