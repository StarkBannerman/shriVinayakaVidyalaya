import { Box, IconButton, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

export default function MobileExpertiseCard({ cardDetails }) {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        ml: -3,
        mt: 2,
      }}
    >
      <Box sx={{ width: "90%" }}>
        <Box
          sx={{
            minHeight: "200px",
            width: "100%",
            backgroundColor: "#FFF",
            p: 2,
            borderRadius: "20px 20px 20px 0px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 700,
              mb: 2,
            }}
          >
            {cardDetails.heading}
          </Typography>

          {cardDetails?.paragraph && (
            <Typography
              sx={{
                textAlign: "justify", // Justify text alignment
                fontSize: "14px", // Font size
                fontWeight: 400, // Font weight
                color: "#414040", // Text color
                lineHeight: 1.6, // Line height for readability
                maxWidth: "600px", // Maximum width for the paragraph
                margin: "0 auto", // Center the paragraph if it has a maxWidth
              }}
            >
              {cardDetails.paragraph}
            </Typography>
          )}
          {cardDetails?.subItems &&
            cardDetails.subItems.map((subItem) => (
              <Box sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px", // Font size
                    fontWeight: 700,
                  }}
                >
                  {subItem.subHeading}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "justify", // Justify text alignment
                    fontSize: "14px", // Font size
                    fontWeight: 400, // Font weight
                    color: "#414040", // Text color
                    lineHeight: 1.6, // Line height for readability
                    maxWidth: "600px", // Maximum width for the paragraph
                    margin: "0 auto", // Center the paragraph if it has a maxWidth
                  }}
                >
                  {subItem.paragraph}
                </Typography>
              </Box>
            ))}
          {cardDetails.listItems && (
            <ol style={{ paddingLeft: "20px", margin: 0 }}>
              {cardDetails.listItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "16px", // Font size
                    fontWeight: 400, // Font weight
                    color: "#414040", // Text color
                    marginBottom: "6px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ol>
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              height: "80px",
              width: "60%",
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
              width: "40%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              sx={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                backgroundColor: "#FFF",
                display: "grid",
                placeItems: "center",
                ml: 1,
                mt: 1,
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
      </Box>
    </Box>
  );
}
