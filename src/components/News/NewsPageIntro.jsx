"use client";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import newImage from "../../assets/newsIntroImage.jpg";

export default function NewsEvents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const upcomingEvents = [
    {
      month: "Nov",
      day: "1",
      title: "Volleyball Match",
      time: "8:00 AM - 9:00 AM",
    },
    {
      month: "Nov",
      day: "16",
      title: "Annual Sports Day",
      time: "8:00 AM - 9:00 AM",
    },
    {
      month: "Dec",
      day: "2",
      title: "Lorem Ipsum Ipsum Lorem",
      time: "8:00 AM - 9:00 AM",
    },
    {
      month: "Dec",
      day: "20",
      title: "Lorem Ipsum Ipsum",
      time: "8:00 AM - 9:00 AM",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 4 },
              boxSizing: "border-box",
        mt:5
      }}
    >
      <Box
        sx={{
          mx: "auto",
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 700,
              color: "#000000",
              mb: 1,
            }}
          >
            News & Events
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.375rem" },
              fontWeight: 500,
              color: "#333333",
              mb: 2,
            }}
          >
            Embracing Learning with Discovery and Joy
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: "#555555",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            Welcome to our News & Events page, where the magic of childhood
            comes alive through the enriching experiences and adventures that
            our students embark on each day. At our school, we believe that
            learning goes beyond textbooks, and we strive to create a holistic
            and engaging environment that nurtures every aspect of a child's
            development.
          </Typography>
        </Box>

        {/* Main Content Section */}
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          {/* Left Side - Image */}
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                height: { xs: "400px", sm: "450px", md: "500px", lg: "100%" },
                maxHeight: "600px",
                width: "100%",
                display: "flex",
              }}
            >
              <Box
                component="img"
                src={newImage}
                alt="Students participating in sports activities"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Upcoming Events */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ pl: { lg: 2 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.875rem" },
                  fontWeight: 700,
                  color: "#000000",
                  mb: 3,
                }}
              >
                Upcoming Events !
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {upcomingEvents.map((event, index) => (
                  <Card
                    key={index}
                    sx={{
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
                      borderRadius: "8px",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        {/* Date Badge */}
                        <Box
                          sx={{
                            minWidth: "50px",
                            p: 1,
                            borderRadius: "6px",
                            background:
                              "linear-gradient(135deg, #F68820 0%, #FFA41B 100%)",
                            textAlign: "center",
                            boxShadow: "0px 2px 6px rgba(246, 136, 32, 0.2)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: 500,
                              fontSize: "0.75rem",
                            }}
                          >
                            {event.month}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: 700,
                              fontSize: "1.125rem",
                              lineHeight: 1.1,
                            }}
                          >
                            {event.day}
                          </Typography>
                        </Box>

                        {/* Event Details */}
                        <Box>
                          <Typography
                            sx={{
                              color: "#333333",
                              fontWeight: 600,
                              fontSize: "1rem",
                              mb: 0.25,
                            }}
                          >
                            {event.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#666666",
                              fontWeight: 400,
                              fontSize: "0.75rem",
                            }}
                          >
                            {event.time}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* View Calendar Button */}
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  width: "100%",
                  py: 1.25,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg, #F68820 0%, #FFA41B 100%)",
                  boxShadow: "0px 3px 12px rgba(246, 136, 32, 0.25)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #E67810 0%, #F5940B 100%)",
                    boxShadow: "0px 4px 16px rgba(246, 136, 32, 0.35)",
                  },
                }}
              >
                View Calendar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
