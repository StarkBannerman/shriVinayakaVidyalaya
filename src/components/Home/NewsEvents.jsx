import { Box, Grid, Typography } from "@mui/material";
import NewsEventImage from "../../assets/newsEvent.png";
import NewsEvents from "./NewsEventCars";
import independeceday from "../../assets/independencedaycelebration.png";
import krishna from "../../assets/krishnaJanmashami.png";
import kanndarotsava from "../../assets/kannadarajotsava.png";

export default function NewsFunction() {
  const newsEvents = [
    {
      image: independeceday,
      name: "Independence Day Celebration",
      date: "15/08/2024",
      link: "#",
    },
    {
      image: krishna,
      name: "Krishna Janmashtami",
      date: "26/08/2023",
      link: "#",
    },
    {
      image: kanndarotsava,
      name: "Kannada Rajyotsava",
      date: "01/11/2024",
      link: "#",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          mt: 20,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box sx={{ width: "90%", display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "50px", fontWeight: 700, width: "70%" }}>
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
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <NewsEvents event={event} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
