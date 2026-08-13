import { INFRASTRUCTURE } from "../../content/infrastructure";
import { Box, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.webp";
import sportsStudent from "../../assets/sportsStudents.webp";
import swimmingPool from "../../assets/SwimmingPool.webp";
export default function MobileSportsFacilities() {
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
            borderRadius: "0px 10px 10px 0px",
            width: "190px",
            mr: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#FFF",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {INFRASTRUCTURE.sportsHeading}
          </Typography>
        </Box>
        <img
          src={DownArrow}
          style={{ marginTop: "30px", height: "40px", width: "60px" }}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
          gap: 10,
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {/* Item 1  */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: "345px",
                  width: "345px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  overflow: "hidden", // Ensure the image is clipped to the circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  mb: -5,
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
            </Box>
            <Box
              sx={{
                width: "320px",
                // height: "200px",
                border: "5px solid #F68820",
                backgroundColor: "#FFF",
                borderRadius: "20px",
                display: "grid",
                placeItems: "center",
                p: 1,
                pt: 5,
                pb: 2,
              }}
            >
              <Box
                sx={{
                  width: "230px",
                  height: "60px",
                  backgroundColor: "#FFEAB2",
                  border: "1px solid #F68820 ",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  zIndex: 1,
                  mt: -3,
                }}
              >
                <Typography
                  sx={{
                    color: "#4B4B4B",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  {INFRASTRUCTURE.sports[0].name}
                </Typography>
              </Box>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  fontWeight: 400,
                  width: "90%",
                  zIndex: 1,
                  mt: 2,
                }}
              >
                {INFRASTRUCTURE.sports[0].desc}
              </Typography>
            </Box>
          </Box>

          {/* Item 2 */}
          {/* <Box>
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
                  style={{ borderRadius: "50%", objectFit: "cover" }} alt="Students taking part in sports" loading="lazy" decoding="async" />
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
                  Sports Hall
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
                border: "5px solid #7214FF",
                backgroundColor: "#FFF",
                borderRadius: "20px",

                mt: "-280px",
              }}
            ></Box>
          </Box> */}

          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: "345px",
                  width: "345px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  overflow: "hidden", // Ensure the image is clipped to the circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  mb: -5,
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
            </Box>
            <Box
              sx={{
                width: "320px",
                // height: "200px",
                border: "5px solid #7214FF",
                backgroundColor: "#FFF",
                borderRadius: "20px",
                display: "grid",
                placeItems: "center",
                p: 1,
                pt: 5,
                pb: 2,
              }}
            >
              <Box
                sx={{
                  width: "230px",
                  height: "60px",
                  backgroundColor: "#F4EDFF",
                  border: "1px solid #7214FF ",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  zIndex: 1,
                  mt: -3,
                }}
              >
                <Typography
                  sx={{
                    color: "#4B4B4B",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  {INFRASTRUCTURE.sports[1].name}
                </Typography>
              </Box>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  fontWeight: 400,
                  width: "90%",
                  zIndex: 1,
                  mt: 2,
                }}
              >
                {INFRASTRUCTURE.sports[1].desc}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
