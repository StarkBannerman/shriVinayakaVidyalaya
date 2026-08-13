import { ACADEMICS } from "../../content/academics";
import { Icon } from "../../content/iconRegistry";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import teacherImage from "../../assets/teacherImage.webp";

export default function Features() {
  const f = ACADEMICS.approachFeatures;
  const gridOne = f.slice(0, 2);
  const gridTwo = f.slice(2, 4);
  const gridThree = f.slice(4, 6);

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          mb: 10,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {ACADEMICS.approachHeading}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "36px", md: "50px" },
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#F68820",
                }}
              >
                {ACADEMICS.approachSubheading}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 400,
                  textAlign: { xs: "justify", sm: "justify", md: "center" },
                  color: "#333333",
                  lineHeight: 1.6,
                  mt: 2,
                  mb: 2,
                  px: { xs: 2, sm: 5, md: 10 },
                }}
              >
                {ACADEMICS.approachIntro}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100vw",
          backgroundImage: `url(${teacherImage})`,
          backgroundSize: "cover",
          backgroundColor: "red",
          ml: 0,
          backgroundPosition: "center",
          mt: 10,
        }}
      >
        {[gridOne, gridTwo, gridThree].map((grid, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{
              gap: 2,
              backgroundColor:
                index === 0
                  ? "#F6882080"
                  : index === 1
                    ? "#307B7480"
                    : "#7214FF4D",
              p: 2,
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "column",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {grid.map((item, idx) => (
              <Box
                key={idx}
                sx={{ position: "relative", width: "100%", zIndex: 1, mb: 3 }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15%",
                    transform: "translateX(-50%)",
                    height: "60px",
                    width: "60px",
                    border: "2px solid black",
                    backgroundColor: "#FBBE18",
                    borderRadius: "12px",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 2,
                  }}
                >
                  <IconButton sx={{ color: "#000" }}>
                    <Icon
                      name={item?.icon}
                      sx={{ width: "35px", height: "35px" }}
                    />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#FFF",
                    borderRadius: "10px",
                    minHeight: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 3,
                    mt: "35px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                      fontWeight: 500,
                      textAlign: "justify",
                      width: "90%",
                      mt: 2,
                    }}
                  >
                    {item?.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
