import { Grid, Typography, Box } from "@mui/material";
import TransportFacility from "../../assets/transportFacility.png";
import sportsLogo from "../../assets/sports.png";
import scienceLabLogo from "../../assets/scienceLab.png";
import extracurricularLogo from "../../assets/extracurricular.png";
import ItLab from "../../assets/Itscience.png";
import LibraryLogo from "../../assets/Library.png";

export default function Facilities() {
  const Facilities = [
    {
      name: "Library",
      image: LibraryLogo,
    },
    {
      name: "Sports",
      image: sportsLogo,
    },
    {
      name: "Science Lab",
      image: scienceLabLogo,
    },
    {
      name: "IT Lab",
      image: ItLab,
    },
    {
      name: "Extra Curriculars",
      image: extracurricularLogo,
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
            <img src={facility.image} height="80" width="80" />
            <Typography sx={{ mt: 1 }}>{facility.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
