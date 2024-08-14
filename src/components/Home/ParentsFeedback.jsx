import { Box, Grid, Typography } from "@mui/material";
import curvyArrow from "../../assets/curvyArrow.png";
import ParentsReviewCard from "./ParentsReviewCard";
import ProfileImage from "../../assets/profileImage.png";

export default function ParentsFeedback() {
  const reviews = [
    {
      profilePicture: ProfileImage,
      name: "Leo Das",
      profession: "Business analyst",
      reviewDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Idummy text ever since the 1500s, when an unknown printer`,
    },
    {
      profilePicture: ProfileImage,
      name: "Leo Das",
      profession: "Business analyst",
      reviewDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Idummy text ever since the 1500s, when an unknown printer`,
    },
    {
      profilePicture: ProfileImage,
      name: "Leo Das",
      profession: "Business analyst",
      reviewDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Idummy text ever since the 1500s, when an unknown printer`,
    },
  ];
  return (
    <Box
      sx={{
        width: "100vw",
        // height: "200px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ width: "90%", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "50px", fontWeight: 700, width: "70%" }}>
          What our Parent are feeling about our Institution
        </Typography>
        <img
          src={curvyArrow}
          height={"75px"}
          width={"150px"}
          style={{ marginLeft: "55%", marginTop: "-70px" }}
        />
      </Box>

      <Grid
        container
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
        {reviews.map((review) => (
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <ParentsReviewCard review={review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
