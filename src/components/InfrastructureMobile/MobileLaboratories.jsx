import { Box, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.webp";
import scienceLabImage1 from "../../assets/scienceLabImage1.webp";
import scienceLabeImage2 from "../../assets/ScienceLabImage2.webp";
import computerLab from "../../assets/computerLab.webp";
import labImage from "../../assets/dandTlab.webp";
import scienceLab from "../../assets/scienceLab.webp";
export default function MobileLaborotaries() {
  const laborotaries = [
    {
      name: "Science Lab",
      image: labImage,
      desc: "Safe and spacious outdoor areas for recreational activities and games. Featuring a variety of equipment such as swings, slides, climbing structures, and open areas for games, our playgrounds cater to different age groups and interests.",
      leftCornerImage: scienceLabImage1,
      rightCornerImage: scienceLabeImage2,
      borderColor: "#FFAF64",
    },
    {
      name: "Computer Lab",
      image: scienceLab,
      desc: "Safe and spacious outdoor areas for recreational activities and games. Featuring a variety of equipment such as swings, slides, climbing structures, and open areas for games, our playgrounds cater to different age groups and interests.",
      leftCornerImage: null,
      rightCornerImage: computerLab,
      borderColor: "#C5C4FF",
    },
  ];
  return (
    <Box>
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
            borderRadius: "0px 8px 8px 0px",
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
            Laborotaries
          </Typography>
        </Box>
        <img
          src={DownArrow}
          style={{ marginTop: "50px" }}
          height={"60px"}
          width={"60px"}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </Box>

      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
          mt: 2,
        }}
      >
        {laborotaries.map((lab) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                p: 1.5,
                borderRadius: "15px",
                marginBottom: "-30px",
                backgroundColor: lab?.borderColor,
                zIndex: 1,
              }}
            >
              <img
                src={lab?.image}
                style={{
                  width: "230px",
                  height: "230px",
                  borderRadius: "10px",
                  zIndex: 1,
                  objectFit: "cover",
                }}
                alt={lab?.name}
                loading="lazy"
                decoding="async"
              />
            </Box>

            <Box
              sx={{
                pt: 6,
                pb: 0,
                backgroundColor: "#FFF",
                borderRadius: "20px",
                //   height: "230px",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#4C4C4C",
                }}
              >
                {lab?.name}
              </Typography>
              <Typography
                sx={{ fontSize: "16px", textAlign: "justify", width: "80%" }}
              >
                {lab?.desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "110%",
                  flexDirection: "row",
                  alignItems: "space-between",
                  justifyContent: "space-between",
                  mt: 2,
                  mb: -2,
                }}
              >
                {lab?.leftCornerImage && (
                  <img
                    src={lab?.leftCornerImage}
                    height={"50px"}
                    width={"50px"}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {lab?.rightCornerImage && (
                  <img
                    src={lab?.rightCornerImage}
                    height={"50px"}
                    width={"50px"}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* <Box
        sx={{
          width: "100vw",
          pt: 5,
          pb: 5,
          display: "grid",
          placeItems: "center",
          mb: 5,
          mt: 5,
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "400px",
            backgroundColor: "#FFF",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "60%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // pl: 3,
              // pt: 3,
            }}
          >
            <Box
              sx={{
                height: "70%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "42px",
                  color: "#4C4C4C",
                  fontWeight: 700,
                  width: "80%",
                  textAlign: "center",
                }}
              >
                Computer Lab
              </Typography>

              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  textAlign: "justify",
                  width: "80%",
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
                height: "30%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ ml: -5, mb: -5 }}>
                <img src={computerLab} height={"120px"} width={"120px"} alt="Computer laboratory" loading="lazy" decoding="async" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "100%",
              width: "40%",
              backgroundColor: "#C5C4FF",
              borderRadius: "10px",
              mt: -2,
              p: 2,
            }}
          >
            <img
              src={laboratoryImage}
              height={"100%"}
              width={"100%"}
              style={{ borderRadius: "8px" }} alt="Science laboratory" loading="lazy" decoding="async" />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}
