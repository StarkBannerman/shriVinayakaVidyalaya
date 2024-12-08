import { Box, Grid, Typography } from "@mui/material";
import downArrow from "../../assets/leftDownArrow.png";
import checkedBackground from "../../assets/checkedBackground.png";
import { useMediaQueries } from "../../utils/Breakpoints";

export default function Subjects() {
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useMediaQueries();
  const subjects = [
    {
      title: "Language Arts",
      desc: "Reading, writing, storytelling, and communication skills.",
    },
    {
      title: "Mathematics",
      desc: "Number sense, basic operations, problem-solving, and logic.",
    },
    {
      title: "Science",
      desc: "Exploring the natural world through hands-on experiments and investigations.",
    },
    {
      title: "Social Studies",
      desc: "Cultivating an understanding of diverse cultures and communities.",
    },
    {
      title: "Arts and Crafts",
      desc: "Encouraging creativity through various art forms and crafts.",
    },
    {
      title: "Physical Education",
      desc: "Promoting physical fitness, coordination, and teamwork.",
    },
  ];

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {isMobile ? (
          <img
            src={downArrow}
            style={{ height: "40px", width: "60px", marginTop: "30px" }}
          />
        ) : (
          <img
            src={downArrow}
            style={{ marginTop: "120px", height: "150px", width: "200px" }}
          />
        )}

        <Box
          sx={{
            p: 2,
            backgroundColor: "#F68820",
            borderRadius: {
              xs: "15px 0px 0px 15px",
              sm: "15px 15px 0px 15px",
              md: "20px 0px 0px 20px",
              lg: "24px 0px 0px 24px",
            },
            minWidth: { sm: "190px", md: "220px", lg: "500px" },
            ml: 1,
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
          {subjects.map((subject) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={subject.title}>
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  borderRadius: "5px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  backgroundColor: "#FFF",
                  backgroundImage: `url(${checkedBackground})`, // Background image
                  backgroundSize: "cover", // Adjust as needed
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FBBE18CC",
                    p: 1,
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {subject.title}
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  mt: 1,
                  fontSize: "16px",
                  color: "#4C4C4D",
                }}
              >
                {subject.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
