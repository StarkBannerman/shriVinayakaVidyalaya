import { Box, IconButton, Typography } from "@mui/material";
import contactBanner from "../../assets/contactBanner.png";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

export default function JoinCommunity() {
  return (
    <Box
      sx={{
        width: "100vw",
        mt: 10,
        mb: 10,
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          height: "450px",
          width: "90%",
          display: "flex",
          flexDirection: "row",
          //   backgroundColor: "#F68820",
          borderRadius: "50px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "35%",
            borderRadius: "50px 0px 0px 50px",
            backgroundColor: "#F68820",
          }}
        >
          <img
            src={contactBanner}
            height={"450px"}
            width={"100%"}
            // style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "65%",
            borderRadius: "0px 50px 50px 0px",
            // backgroundColor: "red",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "30%",
              borderRadius: "0px 50px 50px 0px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "80%",
                borderRadius: "0px 50px 0px 0px",
                backgroundColor: "#F68820",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "70px",
                  textAlign: "left",
                  ml: 5,
                  fontWeight: 700,
                  color: "#FFF",
                }}
              >
                Get in Touch
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "20%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "110px",
                  width: "110px",
                  backgroundColor: "#FFF",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  mt: 1,
                }}
              >
                <IconButton
                  sx={{ color: "#FF9D01" }}
                  //   onClick={() => {
                  //     window.open(event.link, "_blank");
                  //   }}
                >
                  <ArrowOutwardOutlinedIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "70%",
              borderRadius: "0px 50px 50px 0px",
              backgroundColor: "#F68820",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                textAlign: "left",
                ml: 5,
                fontWeight: 700,
                color: "#FFF",
              }}
            >
              Join our Community of School Parents
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "left",
                ml: 5,
                fontWeight: 500,
                color: "#FFF",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Idummy text
              ever since the 1500s, when an unknown printer
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
