import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import MobileNewsEventCard from "./MobileEventCards";
import { NEWS_EVENTS, formatEventDate } from "../../content/news";

export default function MobileNewsEvent() {
  // Newest 3 only — the strip is a teaser, the /news page is the archive.
  const newsEvents = NEWS_EVENTS.slice(0, 3).map((event) => ({
    ...event,
    date: formatEventDate(event.date),
  }));
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          mt: 5,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
              width: "100%",
              textAlign: "center",
            }}
          >
            News & Upcoming Events
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100vw",
          mt: 5,
          gap: 2,
        }}
      >
        {newsEvents.map((event) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            key={event.id}
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <MobileNewsEventCard event={event} />
          </Grid>
        ))}
      </Grid>

      {/* The strip is only the newest three — this is the way through to the
          full archive. */}
      <Box sx={{ width: "100%", display: "grid", placeItems: "center", mb: 8 }}>
        <Button
          component={RouterLink}
          to="/news"
          variant="contained"
          endIcon={<ArrowOutwardOutlinedIcon />}
          sx={{
            color: "#FFF",
            backgroundColor: "#F68820",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            px: 3,
            height: "44px",
            "&:hover": { backgroundColor: "#E67810" },
          }}
        >
          See more news &amp; events
        </Button>
      </Box>
    </>
  );
}
