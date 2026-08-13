import { INFRASTRUCTURE } from "../../content/infrastructure";
import { Box, Typography } from "@mui/material";
import downArrow from "../../assets/leftDownArrow.webp";
import classroomImage from "../../assets/clasroomImage.webp";
import classRoomImage1 from "../../assets/classroom1.webp";
import classRoomImage2 from "../../assets/classroom2.webp";

export default function MobileClassRoomFacilities() {
  const classRoomFeatures = INFRASTRUCTURE.classroomFeatures;
  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          mb: 5,
        }}
      >
        <img
          src={downArrow}
          style={{ marginTop: "50px", height: "40px", width: "60px" }}
          alt=""
          loading="lazy"
          decoding="async"
        />

        <Box
          sx={{
            p: 1,
            backgroundColor: "#F68820",
            borderRadius: "10px 0px 0px 10px",
            width: "190px",
            ml: 1,
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
            {INFRASTRUCTURE.classroomsHeading}
          </Typography>
        </Box>
      </Box>

      {/* <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <Box
          sx={{
            width: "80%",
            height: "750px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "30%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={labImage}
              style={{
                height: "430px",
                width: "430px",
                border: "15px solid #FFF",
                borderRadius: "20px",
                zIndex: 1,
              }} alt="Science laboratory" loading="lazy" decoding="async" />

            <img
              src={classroomImage}
              style={{ height: "230px", width: "240px", marginRight: "200px" }} alt="Classroom at Shri Vinayaka Vidyalaya" loading="lazy" decoding="async" />
          </Box>

          <Box
            sx={{
              width: "70%",
              height: "100%",
              backgroundColor: "#76B7B1",
              border: "5px solid #FFF",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "30%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  width: "80%",
                  //   m: 5,
                  textAlign: "justify",
                }}
              >
{INFRASTRUCTURE.classroomsIntro}
</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <img
                  src={labImage}
                  style={{
                    height: "430px",
                    width: "430px",
                    border: "15px solid #FFF",
                    borderRadius: "20px",
                    zIndex: 1,
                  }} alt="Science laboratory" loading="lazy" decoding="async" />
              </Box>
              <Box
                sx={{
                  width: "60%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {classRoomFeatures.map((feature) => (
                  <Box
                    sx={{
                      width: "300px",
                      height: "100px",
                      borderRadius: "20px",
                      border: "5px solid #FFF",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#B0EBE5",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: 900,
                        width: "80%",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}

      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mb: -5,
          }}
        >
          <img
            src={classRoomImage1}
            style={{
              height: "180px",
              width: "180px",
              border: "10px solid #FFF",
              borderRadius: "10px",
              objectFit: "cover",
              zIndex: 1,
            }}
            alt="Classroom at Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />

          <img
            src={classroomImage}
            style={{ height: "90px", width: "90px", margin: "20px" }}
            alt="Classroom at Shri Vinayaka Vidyalaya"
            loading="lazy"
            decoding="async"
          />
        </Box>
        <Box
          sx={{
            width: "90%",
            backgroundColor: "#76B7B1",
            borderRadius: "10px",
            pb: 5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={classRoomImage2}
              style={{
                height: "180px",
                width: "180px",
                border: "10px solid #FFF",
                borderRadius: "10px",
                objectFit: "cover",
                zIndex: 1,
              }}
              alt="Classroom at Shri Vinayaka Vidyalaya"
              loading="lazy"
              decoding="async"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                width: "80%",
                //   m: 5,
                textAlign: "justify",
              }}
            >
              {INFRASTRUCTURE.classroomsIntro}
            </Typography>

            {classRoomFeatures.map((feature) => (
              <Box
                sx={{
                  width: "300px",
                  height: "80px",
                  borderRadius: "10px",
                  border: "5px solid #FFF",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#B0EBE5",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: 900,
                    width: "80%",
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
