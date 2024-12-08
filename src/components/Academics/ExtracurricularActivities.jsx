import { Box, Grid, IconButton, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.png";
import BoltIcon from "@mui/icons-material/Bolt";
import BrushIcon from "@mui/icons-material/Brush";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ExtensionIcon from "@mui/icons-material/Extension";
import ScienceIcon from "@mui/icons-material/Science";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useMediaQueries } from "../../utils/Breakpoints";

const extracurricularActivities = [
  {
    icon: <BoltIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Sports and Athletics",
    desc: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    cardBgColor: "#FFEAB2",
    cardBorderColor: "#F68820",
    iconBackgroundColor: "#FBBE18",
    dropShadowColor: "#FBBE18",
  },
  {
    icon: <BrushIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Art and Creativity",
    desc: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    cardBgColor: "#B0EBE6",
    cardBorderColor: "#307B74",
    iconBackgroundColor: "#76B7B1",
    dropShadowColor: "#307B74",
  },
  {
    icon: <AudiotrackIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Music and Performing Arts",
    desc: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    cardBgColor: "#F4EDFF",
    cardBorderColor: "#7214FF",
    iconBackgroundColor: "#C5C4FF",
    dropShadowColor: "#7214FF",
  },
  {
    icon: <ExtensionIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Music and Performing Arts",
    desc: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    cardBgColor: "#F4EDFF",
    cardBorderColor: "#7214FF",
    iconBackgroundColor: "#C5C4FF",
    dropShadowColor: "#7214FF",
  },
  {
    icon: <ScienceIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Science Club",
    desc: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    cardBgColor: "#B0EBE6",
    cardBorderColor: "#307B74",
    iconBackgroundColor: "#76B7B1",
    dropShadowColor: "#307B74",
  },
  {
    icon: <AutoAwesomeIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Cooking and Culinary Arts",
    desc: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    cardBgColor: "#FFEAB2",
    cardBorderColor: "#F68820",
    iconBackgroundColor: "#FBBE18",
    dropShadowColor: "#FBBE18",
  },
];

export default function ExtracurricularActivities() {
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useMediaQueries();
  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: "#F68820",
            borderRadius: {
              xs: "0px 15px 15px 0px",
              sm: "0px 15px 15px 0px",
              md: "0px 12px 12px 0px",
              lg: "0px 24px 24px 0px",
            },
            minWidth: { sm: "190px", md: "220px", lg: "500px" },
            mr: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: "18px", md: "25px", lg: "42px" },
              color: "#FFF",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Extracurricular Activities
          </Typography>
        </Box>
        {isMobile ? (
          <img
            src={DownArrow}
            style={{ marginTop: "50px", height: "60px", width: "60px" }}
          />
        ) : (
          <img src={DownArrow} style={{ marginTop: "90px" }} />
        )}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: "95%",
            mt: 2,
          }}
        >
          {extracurricularActivities.map((activity) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box sx={{ position: "relative", width: "100%", zIndex: 1 }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "-35px", // Adjust this to place the icon box above the main box
                    left: "15%",
                    transform: "translateX(-50%)",
                    height: "70px",
                    width: "70px",
                    border: "2px solid black",
                    backgroundColor: activity?.iconBackgroundColor,
                    borderRadius: "12px",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 2,
                  }}
                >
                  <IconButton sx={{ color: "#000" }}>
                    {activity?.icon}
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    backgroundColor: activity?.cardBgColor,
                    border: `2px solid ${activity?.cardBorderColor}`,
                    boxShadow: `8px 8px 0 ${activity?.dropShadowColor}`,
                    borderRadius: "12px",
                    height: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pl: 3,
                    pr: 3,
                    mt: "35px", // Add margin to the main box to prevent overlap with the icon box
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "28px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {activity?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      textAlign: "justify",
                      mt: 2,
                    }}
                  >
                    {activity?.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
