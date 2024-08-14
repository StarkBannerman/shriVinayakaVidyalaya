import { Avatar, Box, Typography } from "@mui/material";

export default function ParentsReviewCard({ review }) {
  return (
    <Box sx={{ height: "350px", width: "330px" }}>
      <Box
        sx={{
          width: "100%",
          height: "35%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "35%", height: "100%" }}>
          <img
            style={{
              height: "90%",
              width: "90%",
              borderRadius: "50%",
            }}
            src={review.profilePicture}
          ></img>
        </Box>

        <Box
          sx={{
            width: "65%",
            height: "100%",
            borderRadius: "20px 20px 0px 0px",
            backgroundColor: "#FFF",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box sx={{ height: "80%", width: "80%" }}>
            <Typography
              sx={{
                textAlign: "left",
                color: "#323231",
                fontSize: "26px",
                fontWeight: 500,
              }}
            >
              {review.name}
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                color: "#323231",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              {review.profession}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "65%",
          borderRadius: "20px 0px 20px 20px",
          backgroundColor: "#FFF",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box sx={{ height: "90%", width: "90%" }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "#414040",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {review.reviewDesc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
