import { Avatar, Box, Typography } from "@mui/material";
import girlIcon from "../../assets/girlIcon.webp";
export default function ParentsReviewCard({ review }) {
  return (
    <Box sx={{ width: "360px", mb: 2 }}>
      <Box
        sx={{
          width: "100%",
          height: "35%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{ width: "35%", display: "grid", mb: 2, placeItems: "center" }}
        >
          <Avatar
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "50%",
            }}
            src={girlIcon}
          ></Avatar>
        </Box>

        <Box
          sx={{
            width: "65%",
            // height: "100%",
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
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              {review.name}
            </Typography>
            <Typography
              sx={{
                // textAlign: "justify", // Justify text alignment
                fontSize: "12px", // Font size
                fontWeight: 400, // Font weight
                color: "#414040", // Text color
                lineHeight: 1.6, // Line height for readability
                maxWidth: "600px", // Maximum width for the paragraph
                mt: 3,
                margin: "0 auto", // Center the paragraph if it has a maxWidth
              }}
            >
              {review.profession}
            </Typography>
            <Typography
              sx={{
                // textAlign: "justify", // Justify text alignment
                fontSize: "12px", // Font size
                fontWeight: 400, // Font weight
                color: "#414040", // Text color
                lineHeight: 1.6, // Line height for readability
                maxWidth: "600px", // Maximum width for the paragraph
                mt: 3,
                margin: "0 auto", // Center the paragraph if it has a maxWidth
              }}
            >
              {review.voluterringDetails}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          //   height: "65%",
          borderRadius: "20px 0px 20px 20px",
          backgroundColor: "#FFF",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box sx={{ width: "90%", p: 2 }}>
          <Typography
            sx={{
              textAlign: "justify", // Justify text alignment
              fontSize: "14px", // Font size
              fontWeight: 400, // Font weight
              color: "#414040", // Text color
              lineHeight: 1.6, // Line height for readability
              maxWidth: "600px", // Maximum width for the paragraph
              mt: 3,
              margin: "0 auto", // Center the paragraph if it has a maxWidth
            }}
          >
            {review.reviewDesc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
