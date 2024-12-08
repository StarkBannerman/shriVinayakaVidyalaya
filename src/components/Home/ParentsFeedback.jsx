import { Box, Grid, Typography } from "@mui/material";
import curvyArrow from "../../assets/curvyArrow.png";
import ParentsReviewCard from "./ParentsReviewCard";
import ProfileImage from "../../assets/profileImage.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../Hooks /useInView";
export default function ParentsFeedback() {
  const reviews = [
    {
      profilePicture: ProfileImage,
      name: "Amreen",
      profession: "7th std Nawaez Hussein's parent",
      reviewDesc: `As a parent of Naweaz Hussain, who has been attending Shri Vinayaka Vidyalaya since nursery and is now in 7th grade, I’m highly impressed with the school's balanced approach to education. The teachers are dedicated and supportive, helping Naweaz excel academically while also encouraging involvement in extracurricular activities that have boosted his confidence and social skills. The school's infrastructure is well-maintained, and they keep parents well-informed about their child's progress. Overall, Shri Vinayaka Vidyalaya offers a nurturing environment that has greatly contributed to my child's development.`,
    },
    {
      profilePicture: ProfileImage,
      name: "Mridula",
      profession: "Ed.M, Harvard Graduate School of Education, USA",
      volunteeringDetails: "Volunteered from 2023-2024",
      reviewDesc: `Volunteering with SVV was an incredibly enriching experience. I had the freedom to choose the subject I wanted to teach and the method that best suited my approach. I truly appreciated the trust the management placed in me to lead and teach. The students' eagerness and enthusiasm made it a breeze to facilitate activities and achieve the learning outcomes we aimed for!`,
    },
    {
      profilePicture: ProfileImage,
      name: "Alekhya",
      profession:
        "MSc Environment Science, Wageningen University & Research, the Netherlands",
      volunteeringDetails: "Volunteered from 2019-2020",
      reviewDesc: `Working in SVV was never that, work. It was an experience in growth, confidence & sheer happiness. Impacting young minds, curating the library selection, guiding communication & environmental driven changes - these are just some of the many fond memories of my time there. It is my biggest pleasure to call myself a part of the SVV family, shape talented students & contribute to the STEM future of our country.`,
    },
  ];

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
