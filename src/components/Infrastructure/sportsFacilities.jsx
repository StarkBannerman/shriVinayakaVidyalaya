import { Box, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.webp";
import sportsStudent from "../../assets/sportsStudents.webp";
import swimmingPool from "../../assets/SwimmingPool.webp";

export default function SportsFacilities() {
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
            p: 1,
            backgroundColor: "#F68820",
            borderRadius: "0px 20px 20px 0px",
            width: "500px",
            mr: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "42px",
              color: "#FFF",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Sports Facilities
          </Typography>
        </Box>
        <img
          src={DownArrow}
          style={{ marginTop: "90px" }}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {/* Item 1  */}
          <Box>
            <Box sx={{ display: "grid", placeItems: "center", width: "500px" }}>
              <Box
                sx={{
                  height: "500px",
                  width: "500px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  overflow: "hidden", // Ensure the image is clipped to the circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <img
                  src={sportsStudent}
                  height="95%"
                  width="95%"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  alt="Students taking part in sports"
                  loading="lazy"
                  decoding="async"
                />
              </Box>
              <Box
                sx={{
                  width: "400px",
                  height: "110px",
                  backgroundColor: "#FFEAB2",
                  border: "1px solid #F68820 ",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "20px",
                  zIndex: 1,
                  mt: -4,
                }}
              >
                <Typography
                  sx={{
                    color: "#4B4B4B",
                    fontSize: "42px",
                    fontWeight: 700,
                  }}
                >
                  Playground
                </Typography>
              </Box>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  fontWeight: 400,
                  width: "80%",
                  zIndex: 1,
                  mt: 2,
                }}
              >
                Safe and spacious outdoor areas for recreational activities and
                games. Featuring a variety of equipment such as swings, slides,
                climbing structures, and open areas for games, our playgrounds
                cater to different age groups and interests.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "500px",
                height: "300px",
                border: "5px solid #F68820",
                backgroundColor: "#FFF",
                borderRadius: "20px",

                mt: "-280px",
              }}
            ></Box>
          </Box>

          {/* Item 2 */}
          <Box>
            <Box sx={{ display: "grid", placeItems: "center", width: "500px" }}>
              <Box
                sx={{
                  height: "500px",
                  width: "500px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  overflow: "hidden", // Ensure the image is clipped to the circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <img
                  src={swimmingPool}
                  height="95%"
                  width="95%"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  alt="School swimming pool"
                  loading="lazy"
                  decoding="async"
                />
              </Box>
              <Box
                sx={{
                  width: "400px",
                  height: "110px",
                  backgroundColor: "#F4EDFF",
                  border: "1px solid #7214FF ",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "20px",
                  zIndex: 1,
                  mt: -4,
                }}
              >
                <Typography
                  sx={{
                    color: "#4B4B4B",
                    fontSize: "42px",
                    fontWeight: 700,
                  }}
                >
                  Swimming
                </Typography>
              </Box>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  fontWeight: 400,
                  width: "80%",
                  zIndex: 1,
                  mt: 2,
                }}
              >
                At Shri Vinayaka Vidyalaya, our swimming pool offers a safe and
                enjoyable space for students to learn and grow. Guided by
                trained instructors, swimming sessions help build confidence,
                fitness, and discipline in a fun and engaging environment.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "500px",
                height: "300px",
                border: "5px solid #7214FF",
                backgroundColor: "#FFF",
                borderRadius: "20px",

                mt: "-280px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
