import { Box, Typography } from "@mui/material";
import downArrow from "../../assets/leftDownArrow.png";
import labImage from "../../assets/LaboratoryImage.jpeg";
import classroomImage from "../../assets/clasroomImage.png";
import classRoomImage1 from "../../assets/classroom1.JPG";
import classRoomImage2 from "../../assets/classroom2.JPG";

export default function ClassRoomFacilities() {
  const classRoomFeatures = [
    "Interactive whiteboards for engaging lessons",
    "Comfortable seating arrangements to promote collaboration",
    "Adequate storage for educational materials",
  ];
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
          style={{ marginTop: "120px", height: "150px", width: "200px" }}
        />

        <Box
          sx={{
            p: 1,
            backgroundColor: "#F68820",
            borderRadius: "20px 0px 0px 20px",
            width: "500px",
            ml: 1,
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
            Class Rooms
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
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
              src={classRoomImage1}
              style={{
                height: "430px",
                width: "430px",
                border: "15px solid #FFF",
                borderRadius: "20px",
                zIndex: 1,
                objectFit: "cover",
              }}
            />

            <img
              src={classroomImage}
              style={{ height: "230px", width: "240px", marginRight: "200px" }}
            />
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
                Our classrooms are spacious, well-lit, and equipped with the
                latest technology to enhance the learning experience. Our
                classrooms are spacious, well-lit, and equipped with the latest
                technology to enhance the learning experience.
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
                  src={classRoomImage2}
                  style={{
                    height: "430px",
                    width: "430px",
                    border: "15px solid #FFF",
                    borderRadius: "20px",
                    zIndex: 1,
                    objectFit: "cover",
                  }}
                />
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
      </Box>
    </Box>
  );
}
