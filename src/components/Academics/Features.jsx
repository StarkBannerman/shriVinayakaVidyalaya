import { Box, Grid, IconButton, Typography } from "@mui/material";
import teacherImage from "../../assets/teacherImage.jpeg";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BrushIcon from "@mui/icons-material/Brush";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExtensionIcon from "@mui/icons-material/Extension";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function Features() {
  const gridOne = [
    {
      icon: <AutoStoriesIcon sx={{ width: "35px", height: "35px" }} />,
      title: "Thematic Learning",
      desc: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    },
    {
      icon: <BrushIcon sx={{ width: "35px", height: "35px" }} />,
      title: "Art and Creativity",
      desc: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    },
  ];

  const gridTwo = [
    {
      icon: <SignalCellularAltIcon sx={{ width: "35px", height: "35px" }} />,
      title: "STEAM Education",
      desc: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    },
    {
      icon: <LightModeIcon sx={{ width: "35px", height: "35px" }} />,
      title: "Outdoor Education",
      desc: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    },
  ];

  const gridThree = [
    {
      icon: <ExtensionIcon sx={{ width: "35px", height: "35px" }} />,
      title: "Language Immersion",
      desc: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    },
    {
      icon: <StarRateIcon sx={{ width: "35px", height: "35px" }} />,
      title: "Play-Based Learning",
      desc: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    },
  ];

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
                Our Features
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "36px", md: "50px" },
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#F68820",
                }}
              >
                What We Provide
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
                  px: { xs: 2, sm: 5, md: 10 }, // Responsive padding for text width
                }}
              >
                Our school provides a nurturing and stimulating environment,
                fostering a love for learning that lasts a lifetime. Join us as
                we embark on an exciting educational journey together!
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
                  <IconButton sx={{ color: "#000" }}>{item?.icon}</IconButton>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#FFF",
                    borderRadius: "10px",
                    minHeight: "250px",
                    // width: "100%",
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
