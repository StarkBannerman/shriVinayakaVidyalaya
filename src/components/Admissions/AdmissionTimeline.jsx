import { Box, Grid, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.webp";
import { useMediaQueries } from "../../utils/Breakpoints";

const timeline = [
  {
    name: "Inquiry",
    desc: "Submit an inquiry form through our website or contact our admissions office to express your interest in Shri Vinayaka Vidyalaya.",
  },
  {
    name: "School Tour",
    desc: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    name: "Application Form",
    desc: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    name: "Parent Interview",
    desc: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Shri Vinayaka Vidyalaya aligns with your family's expectations.",
  },
  {
    name: "Student Assessment",
    desc: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    name: "Acceptance",
    desc: "Once the admission process is complete, you will receive an official acceptance letter from Shri Vinayaka Vidyalaya.",
  },
];

export default function AdmissionTimeline() {
  const { isMobile } = useMediaQueries();

  return (
    <Box sx={{ mb: 10 }}>
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
            Timeline
          </Typography>
        </Box>
        {isMobile ? (
          <img
            src={DownArrow}
            style={{ marginTop: "50px", height: "60px", width: "60px" }}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <img
            src={DownArrow}
            style={{ marginTop: "90px" }}
            alt=""
            loading="lazy"
            decoding="async"
          />
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
          {timeline.map((activity, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Box sx={{ position: "relative", width: "100%", zIndex: 1 }}>
                {/* Icon Box */}
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor: "#FFF",
                    border: `2px solid #F6882066`,
                    boxShadow: `6px 6px 0 #F68820`,
                    borderRadius: "12px",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 2,
                  }}
                >
                  <Typography sx={{ fontSize: "40px", fontWeight: 700 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                </Box>

                {/* Connecting Line */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "70px",
                    left: "35px",
                    height: "43px",
                    width: "20px",
                    backgroundColor: "#F6882099",
                    zIndex: 1,
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* Circle in Connecting Line */}
                  <Box
                    sx={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#FFF",
                      border: "2px solid #000",
                      borderRadius: "50%",
                      mt: -2,
                      //   mb: "4px", // Adjust margin as needed to position circle
                    }}
                  />
                  {/* Perpendicular Line from Circle to Main Card */}
                  <Box
                    sx={{
                      height: "35px", // Adjust height to reach the main card
                      width: "3px",
                      backgroundColor: "#000",
                      //   mt: "2px",
                    }}
                  />
                </Box>
              </Box>

              {/* Main Content Box */}
              <Box
                sx={{
                  backgroundColor: "#FFF",
                  border: `2px solid #F6882066`,
                  boxShadow: `8px 8px 0 #F68820`,
                  borderRadius: "12px",
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  pl: 3,
                  pr: 3,
                  mt: "45px", // Adjust margin for connecting line
                }}
              >
                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
                  {activity.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    textAlign: "justify",
                    mt: 2,
                  }}
                >
                  {activity.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
