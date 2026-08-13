import { HOME } from "../../content/home";
import { Box, Grid, Typography } from "@mui/material";
// import ParentsReviewCard from "../ParentsReviewCard";
import ProfileImage from "../../assets/profileImage.webp";
import MobileParentsReviewCard from "./MobileParentsReviewCard";

const REVIEW_AVATARS = [ProfileImage];

export default function MobileParentsFeedback() {
  const reviews = HOME.reviews.map((r, i) => ({
    ...r,
    profilePicture: REVIEW_AVATARS[i % REVIEW_AVATARS.length],
  }));
  return (
    <Box
      sx={{
        width: "100vw",
        // height: "200px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {HOME.feedbackHeading}
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          //   height: "300px",
          width: "100vw",
          mt: 10,
          gap: 2,
        }}
      >
        {reviews.map((review) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <MobileParentsReviewCard review={review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
