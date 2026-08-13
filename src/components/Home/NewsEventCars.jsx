import { Box, IconButton, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

export default function NewsEvents({ event }) {
  return (
    <Box
      sx={{
        width: "350px",
        height: "360px",
        mb: 10,
      }}
    >
      <Box
        sx={{
          // height: "70%",
          width: "100%",
          backgroundColor: "#FFF",
          borderRadius: "20px 20px 20px 0px",
          p: 1,
        }}
      >
        <img
          src={event?.image}
          style={{
            height: "100%",
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
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "60%",
            backgroundColor: "#FFF",
            borderRadius: "0px 0px 20px 20px",
            pl: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
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
              height: "100px",
              width: "100px",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              mt: 1,
            }}
          >
            <IconButton
              sx={{ color: "#FF9D01" }}
              onClick={() => {
                window.open(event.link, "_blank");
              }}
            >
              <ArrowOutwardOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
