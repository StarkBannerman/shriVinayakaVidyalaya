import { AppBar, Box, Typography } from "@mui/material";
import schoolLogo from "../../assets/schoolLogo.webp";

export default function MenuBar({ onMenuClick }) {
  const handleMenuClick = (section) => {
    onMenuClick(section);
  };
  return (
    <>
      <AppBar
        sx={{
          height: "15vh",
          width: "100vw",
          background: "transparent",
          boxShadow: "none",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            height: "70px",
            backgroundColor: "#FFF",
            borderRadius: "20px",
            // p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ ml: 4 }}>
            <img
              src={schoolLogo}
              height="50px"
              width="75px"
              alt="School Logo"
              loading="lazy"
              decoding="async"
            />
          </Box>

          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {[
              "Home",
              "About",
              "Academics",
              "Testimonials",
              "News & Events",
              // "Infrastructure",
              // "Contact Us",
            ].map((text, index) => (
              <Typography
                onClick={() => {
                  handleMenuClick(text);
                }}
                key={index}
                variant="body1"
                sx={{
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#F68820",
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* <Button
            variant="outlined"
            sx={{
              width: "150px",
              height: "40px",
              mr: 2,
              borderRadius: "10px",
              border: "1px solid #F68820",
              color: "#F68820",
              "&:hover": {
                border: "1px solid #F68820",
                color: "#F68820",
              },
            }}
          >
            Connect
          </Button> */}
        </Box>
      </AppBar>
    </>
  );
}
