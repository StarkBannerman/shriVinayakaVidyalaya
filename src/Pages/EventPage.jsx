import { useParams, Link as RouterLink, Navigate } from "react-router-dom";
import { Box, Toolbar, Typography, Link, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ResponsiveMenuBar from "../components/Common/Menu";
import Footer from "../components/Common/Footer";
import Seo from "../components/Common/Seo";
import RichText from "../content/RichText";
import EventGallery from "../components/News/EventGallery";
import { findEvent, formatEventDateLong, upcomingEvents } from "../content/news";

export default function EventPage() {
  const { slug } = useParams();
  const event = findEvent(slug);

  // Unknown slug — send them to the listing rather than a dead end.
  if (!event) return <Navigate to="/news" replace />;

  const isUpcoming = upcomingEvents().some((e) => e.id === event.id);

  return (
    <Box>
      <ResponsiveMenuBar />
      <Seo title={event.name} description={event.desc} />
      <Toolbar />

      <Box
        component="main"
        sx={{
          width: "100%",
          py: { xs: 3, md: 6 },
          px: { xs: 2, sm: 4, md: 8 },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          <Link
            component={RouterLink}
            to="/news"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "#F68820",
              fontWeight: 600,
              fontSize: "14px",
              mb: 2,
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "18px" }} />
            All news &amp; events
          </Link>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1, flexWrap: "wrap" }}>
            <Typography sx={{ color: "#777", fontSize: { xs: "13px", md: "15px" } }}>
              {formatEventDateLong(event.date)}
              {isUpcoming && event.time ? ` · ${event.time}` : ""}
            </Typography>
            {isUpcoming && (
              <Chip
                label="Upcoming"
                size="small"
                sx={{ backgroundColor: "#FFEAB2", color: "#8A5A00", fontWeight: 600 }}
              />
            )}
          </Box>

          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "36px", md: "44px" },
              lineHeight: 1.15,
              mb: event.subheading ? 1 : 3,
            }}
          >
            {event.name}
          </Typography>

          {event.subheading && (
            <Typography
              sx={{
                color: "#F68820",
                fontWeight: 600,
                fontSize: { xs: "16px", md: "20px" },
                mb: 3,
              }}
            >
              {event.subheading}
            </Typography>
          )}

          <EventGallery event={event} />

          <Typography
            sx={{
              color: "#333",
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: 1.7,
              mt: 4,
            }}
          >
            {event.desc}
          </Typography>

          {event.body && (
            <Typography
              component="div"
              sx={{
                color: "#555",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.8,
                mt: 2,
                "& ul": { pl: 3 },
                "& li": { mb: 1 },
              }}
            >
              <RichText value={event.body} strongStyle={{ color: "#000" }} />
            </Typography>
          )}

          {event.link && (
            <Link
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                mt: 3,
                color: "#F68820",
                fontWeight: 600,
              }}
            >
              See more from this event
              <OpenInNewIcon sx={{ fontSize: "18px" }} />
            </Link>
          )}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
