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
    desc: "On our courts and fields, students learn more than just how to play — they learn how to fall, rise, collaborate, and persist. From team sports to yoga, every activity builds character and courage.",
    cardBgColor: "#FFEAB2",
    cardBorderColor: "#F68820",
    iconBackgroundColor: "#FBBE18",
    dropShadowColor: "#FBBE18",
  },
  {
    icon: <BrushIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Art and Creativity",
    desc: "In our art rooms, the messier the hands, the brighter the minds. Here, students are encouraged to imagine wildly, express freely, and explore the beauty of their inner world through visual arts.",
    cardBgColor: "#B0EBE6",
    cardBorderColor: "#307B74",
    iconBackgroundColor: "#76B7B1",
    dropShadowColor: "#307B74",
  },
  {
    icon: <AudiotrackIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Music and Performing Arts",
    desc: "Every note sung, every scene acted out is a step towards confidence, rhythm, and presence. Drama, music, and dance teach our students how to tell stories — and how to own theirs.",
    cardBgColor: "#F4EDFF",
    cardBorderColor: "#7214FF",
    iconBackgroundColor: "#C5C4FF",
    dropShadowColor: "#7214FF",
  },
  {
    icon: <ExtensionIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Language Clubs",
    desc: "Our language clubs are more than learning vocabulary — they’re about stepping into other worlds. Students explore global cultures, celebrate diversity, and communicate with confidence.",
    cardBgColor: "#F4EDFF",
    cardBorderColor: "#7214FF",
    iconBackgroundColor: "#C5C4FF",
    dropShadowColor: "#7214FF",
  },
  {
    icon: <ScienceIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Science Club",
    desc: "This is where “why?” meets “wow!” Through hands-on experiments and explorations, students transform questions into discoveries and curiosity into innovation.",
    cardBgColor: "#B0EBE6",
    cardBorderColor: "#307B74",
    iconBackgroundColor: "#76B7B1",
    dropShadowColor: "#307B74",
  },
  // {
  //   icon: <AutoAwesomeIcon sx={{ height: "30px", width: "30px" }} />,
  //   title: "Cooking and Culinary Arts",
  //   desc: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
  //   cardBgColor: "#FFEAB2",
  //   cardBorderColor: "#F68820",
  //   iconBackgroundColor: "#FBBE18",
  //   dropShadowColor: "#FBBE18",
  // },
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
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "24px" },
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Where Passions Find a Platform
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 400,
                textAlign: "center",
                color: "#737373",
                lineHeight: 1.6,
                mt: 2,
                mb: 2,
                // width: { xs: "90%", sm: "80%", md: "60%" },
              }}
            >
              Learning doesn’t stop when the bell rings — at SVV, that’s when it
              takes flight. Our extracurricular programs are not just “add-ons”;
              they are essential spaces for self-discovery, leadership, and joy.
              Whether your child shines in front of a mic, with a paintbrush, or
              in a lab coat — we have a place for every kind of brilliance.
            </Typography>
          </Grid>

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
