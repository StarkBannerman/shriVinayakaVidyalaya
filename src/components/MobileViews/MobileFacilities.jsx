import { Grid, Typography, Box } from "@mui/material";
import Library from "../../assets/transportFacility.png";
export default function MobileFacilities() {
  const Facilities = [
    {
      name: "Library",
      image: Library,
    },
    {
      name: "Library",
      image: Library,
    },
    {
      name: "Library",
      image: Library,
    },
    {
      name: "Library",
      image: Library,
    },
    {
      name: "Library",
      image: Library,
    },
  ];
  return (
    <Box sx={{ width: "100%", display: "grid", placeItems: "center", mt: 10 }}>
      <Grid
        container
        spacing={2}
        sx={{
          width: "80%",
          p: 2,
          backgroundColor: "#FFF",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Facilities.map((facility) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={2}
            xl={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={facility.image} height="50" width="50" />
            <Typography sx={{ mt: 1 }}>{facility.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
