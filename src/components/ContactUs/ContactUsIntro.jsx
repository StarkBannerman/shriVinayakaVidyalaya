import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import schoolImage from "../../assets/sportsPageImage.jpeg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ContactUsIntro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const introItems = [
    {
      logo: EmailIcon,
      label: "EMAIL",
      value: "shrivinayakavidyalaya@gmail.com",
    },
    {
      logo: CallIcon,
      label: "PHONE",
      value: "+91 9916372340",
    },
    {
      logo: LocationOnIcon,
      label: "ADDRESS",
      value:
        "10, 1st Main road, Guru Raghavendra Nagar, Eswara Layout, JP Nagar 7th phase, Arekere kothanur, Bengaluru Karnataka 560078",
    },
    {
      logo: AccessTimeIcon,
      label: "OFFICE HOURS",
      value: "9am - 6 pm",
    },
  ];

  // Mobile layout
  if (isMobile) {
    return (
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(255, 248, 235, 0.5)",
          py: 4,
          px: 2,
          boxSizing: "border-box",
        }}
      >
        {/* Top text section */}
        <Typography
          sx={{
            color: "#333333",
            fontWeight: 500,
            fontSize: "18px",
            textAlign: "center",
            mb: 4,
            lineHeight: 1.6,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          We value open communication and are eager to assist you with any
          inquiries. Feel free to reach out to us through any of the following
          contact methods
        </Typography>

        {/* Image section */}
        <Box
          sx={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "400px",
              backgroundImage: `url(${schoolImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              p: 3,
              pt: 6,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: 1.2,
                mb: 2,
                width: "90%",
              }}
            >
              Feel Free To Connect With Us
            </Typography>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #FFFFFF",
                borderRadius: "4px",
                textTransform: "none",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 600,
                px: 3,
                py: 1,
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>

        {/* Contact cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {introItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                p: 3,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FEF3E7",
                  border: "2px solid #F68820",
                  borderRadius: "8px",
                  mr: 3,
                  flexShrink: 0,
                }}
              >
                <item.logo sx={{ color: "#F97316", fontSize: "24px" }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    color: "#F97316",
                    fontWeight: 600,
                    fontSize: "12px",
                    mb: 0.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    color: "#333333",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  // Desktop layout
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(255, 248, 235, 0.5)",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* Top text section - moved to the very top */}
        <Typography
          sx={{
            color: "#333333",
            fontWeight: 500,
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            lineHeight: 1.6,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          We value open communication and are eager to assist you with any
          inquiries. Feel free to reach out to us through any of the following
          contact methods
        </Typography>

        {/* Main content grid */}
        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {/* Left side with image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                minHeight: "500px",
                borderRadius: "16px",
                backgroundImage: `url(${schoolImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(270.07deg, rgba(255, 255, 255, 0) 0.05%, rgba(44, 43, 41, 0.8) 102.43%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  p: { xs: 3, sm: 4 },
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: { xs: "32px", sm: "36px", md: "40px" },
                    lineHeight: 1.2,
                    mb: 2,
                    width: "90%",
                  }}
                >
                  Feel Free To Connect With Us
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #FFFFFF",
                    borderRadius: "4px",
                    textTransform: "none",
                    color: "#FFFFFF",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    mb: 6,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid #FFFFFF",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right side with contact info */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "500px",
              }}
            >
              {/* Contact cards */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {introItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      p: 3,
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.2s ease-in-out",
                      overflow: "hidden",
                      width: "100%",
                      boxSizing: "border-box",
                      "&:hover": {
                        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.12)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FEF3E7",
                        border: "2px solid #F68820",
                        borderRadius: "8px",
                        mr: 3,
                        flexShrink: 0,
                      }}
                    >
                      <item.logo sx={{ color: "#F97316", fontSize: "24px" }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#F97316",
                          fontWeight: 600,
                          fontSize: "12px",
                          mb: 0.5,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#333333",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: 1.5,
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          hyphens: "auto",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
