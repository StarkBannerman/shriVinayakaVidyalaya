import { Link as RouterLink } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

export default function MobileNewsEventCard({ event }) {
  return (
    <Box
      sx={{
        width: "320px",
        minHeight: "290px",
        mb: 10,
      }}
    >
      <Box
        sx={{
          // Fixed, so the cover sits in the same box whatever its aspect
          // ratio. Left to itself a square photo makes this box as tall as
          // the card is wide and shoves the title out of the bottom.
          height: "203px",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#FFF",
          borderRadius: "20px 20px 20px 0px",
          p: 1,
        }}
      >
        <img
          src={event?.image}
          style={{
            height: "100%",
            display: "block",
            width: "100%",
            borderRadius: "20px",
            objectFit: "contain",
          }}
          alt={event?.name}
          loading="lazy"
          decoding="async"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            p: 1,
            width: "60%",
            backgroundColor: "#FFF",
            borderRadius: "0px 0px 20px 20px",
            pl: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#323231",
              width: "90%",
            }}
          >
            {event?.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#323231",
              width: "90%",
            }}
          >{`Date: ${event?.date}`}</Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "40%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              height: "80px",
              width: "80px",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              mt: 1,
            }}
          >
            <IconButton
              component={RouterLink}
              to={`/news/${event.id}`}
              aria-label={`Read about ${event.name}`}
              sx={{ color: "#FF9D01" }}
            >
              <ArrowOutwardOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
