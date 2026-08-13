import { HOME } from "../../content/home";
import { Box, Grid, Typography } from "@mui/material";
import curvyArrow from "../../assets/curvyArrow.webp";
import ParentsReviewCard from "./ParentsReviewCard";
import ProfileImage from "../../assets/profileImage.webp";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInView";
// Avatars are design, not content.
const REVIEW_AVATARS = [ProfileImage, ProfileImage, ProfileImage];

export default function ParentsFeedback() {
  const reviews = HOME.reviews.map((r, i) => ({
    ...r,
    profilePicture: REVIEW_AVATARS[i % REVIEW_AVATARS.length],
  }));

  const gridRef = useRef(null);
  const { isInView } = useInViewOnce(gridRef);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ width: "90%", display: "flex", flexDirection: "column" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate once
          transition={{ duration: 0.5 }}
        >
          <Typography sx={{ fontSize: "50px", fontWeight: 700, width: "70%" }}>
            What our Parents and Volunteers feel about our Institution
          </Typography>
          <img
            src={curvyArrow}
            height={"75px"}
            width={"150px"}
            style={{ marginLeft: "55%", marginTop: "-70px" }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </Box>

      <Grid
        container
        ref={gridRef} // Attach ref to the grid container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "300px",
          width: "100vw",
          mt: 10,
          gap: 2,
        }}
      >
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Trigger animation based on isInView
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <ParentsReviewCard review={review} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
