import { Box, IconButton, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

export default function ExpertiseLinkCard({ cardDetails }) {
  return (
    <Box
      sx={{
        height: "350px",
        width: "330px",
        // borderRadius: "12px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          height: "70%",
          width: "100%",
          backgroundColor: "#FFF",
          borderRadius: "20px 20px 20px 0px",
          p: 2,
        }}
      >
        <Typography
          sx={{ textAlign: "left", fontSize: "26px", fontWeight: 700 }}
        >
          {cardDetails.heading}
        </Typography>

        <Typography
          sx={{ textAlign: "left", fontSize: "16px", fontWeight: 500, mt: 2 }}
        >
          {cardDetails.paragraph}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "30%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "80px",
            width: "70%",
            backgroundColor: "#FFF",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          <Box sx={{ mb: 2, ml: 3 }}>
            <img src={cardDetails.icon} height={"60px"} width={"60px"} />
          </Box>
        </Box>
        <Box
          sx={{
            height: "80px",
            width: "80px",
            m: 1,
            ml: 2,
            mb: 2,
            borderRadius: "50%",
            backgroundColor: "#FFF",
            display: "grid",
            placeItems: "center",
          }}
        >
          <IconButton
            sx={{ color: "#FF9D01" }}
            onClick={() => {
              window.open(cardDetails.link, "_blank");
            }}
          >
            <ArrowOutwardOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
