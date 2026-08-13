import { INFRASTRUCTURE } from "../../content/infrastructure";
import { Box, Typography } from "@mui/material";
import DownArrow from "../../assets/DownArrow.webp";
import scienceLabImage1 from "../../assets/scienceLabImage1.webp";
import scienceLabeImage2 from "../../assets/ScienceLabImage2.webp";
import computerLab from "../../assets/computerLab.webp";
import labImage from "../../assets/dandTlab.webp";
import scienceLab from "../../assets/scienceLab.webp";
export default function Laborotaries() {
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
            {INFRASTRUCTURE.labsHeading}
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
          width: "100vw",
          pt: 5,
          pb: 5,
          display: "grid",
          placeItems: "center",
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
              height: "100%",
              width: "40%",
              backgroundColor: "#FFAF64",
              borderRadius: "10px",
              mt: -2,
              p: 2,
            }}
          >
            <img
              src={labImage}
              height={"100%"}
              width={"100%"}
              style={{ borderRadius: "8px", objectFit: "cover  " }}
              alt="Science laboratory"
              loading="lazy"
              decoding="async"
            />
          </Box>

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
                }}
              >
                {INFRASTRUCTURE.laboratories[0].name}
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
                {INFRASTRUCTURE.laboratories[0].desc}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "30%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ mr: -5 }}>
                <img
                  src={scienceLabeImage2}
                  height={"100px"}
                  width={"100px"}
                  alt="Science laboratory"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={scienceLabImage1}
                  height={"100px"}
                  width={"100px"}
                  style={{ marginLeft: -5 }}
                  alt="Science laboratory"
                  loading="lazy"
                  decoding="async"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
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
                {INFRASTRUCTURE.laboratories[1].name}
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
                {INFRASTRUCTURE.laboratories[1].desc}
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
                <img
                  src={computerLab}
                  height={"120px"}
                  width={"120px"}
                  alt="Computer laboratory"
                  loading="lazy"
                  decoding="async"
                />
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
              src={scienceLab}
              height={"100%"}
              width={"100%"}
              style={{ borderRadius: "8px", objectFit: "cover" }}
              alt="Science laboratory"
              loading="lazy"
              decoding="async"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
