import { Grid, Typography, Box } from "@mui/material";
import Library from "../../assets/transportFacility.png";
import sportsLogo from "../../assets/sports.png";
import scienceLabLogo from "../../assets/scienceLab.png";
import extracurricularLogo from "../../assets/extracurricular.png";
import ItLab from "../../assets/Itscience.png";
import LibraryLogo from "../../assets/Library.png";

export default function MobileFacilities() {
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
    <Box
      sx={{
        width: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#FFF",
        mt: 5,
        pt: 2,
        pb: 2,
        overflowX: "hidden", // Hide any overflow outside the container
        whiteSpace: "nowrap", // Prevent line breaks within items
        "&:hover": {
          animationPlayState: "paused", // Pause scrolling on hover
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          animation: "scrolling 15s linear infinite",
        }}
      >
        {Facilities.concat(Facilities).map((facility, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mr: 5,
              p: 1,
            }}
          >
            <img
              src={facility.image}
              height="50"
              width="50"
              alt={facility.name}
            />
            <Typography sx={{ mt: 1 }}>{facility.name}</Typography>
          </Box>
        ))}
      </Box>
      <style>
        {`
          @keyframes scrolling {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
}
