import { Grid, Typography, Box } from "@mui/material";
import TransportFacility from "../../assets/transportFacility.png";
export default function Facilities() {
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
          <img src={TransportFacility} height="100" width="80" />
          <Typography sx={{ mt: 1 }}>Transport</Typography>
        </Grid>
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
          <img src={TransportFacility} height="100" width="80" />
          <Typography sx={{ mt: 1 }}>Transport</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={2.5}
          xl={2.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={TransportFacility} height="100" width="80" />
          <Typography sx={{ mt: 1 }}>Transport</Typography>
        </Grid>
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
          <img src={TransportFacility} height="100" width="80" />
          <Typography sx={{ mt: 1 }}>Transport</Typography>
        </Grid>
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
          <img src={TransportFacility} height="100" width="80" />
          <Typography sx={{ mt: 1 }}>Transport</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
