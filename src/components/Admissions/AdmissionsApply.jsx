import { Box, Button, Typography } from "@mui/material";
import schoolBackground from "../../assets/schollBackground.webp";

export default function AdmissionsApply() {
  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        width: "100vw",
        height: { xs: "400px", sm: "500px", md: "650px" }, // Adjust height for different screen sizes
        backgroundImage: `url(${schoolBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" }, // Center-align content on smaller screens
          background:
            "linear-gradient(269.88deg, rgba(0, 0, 0, 0) 0.13%, rgba(246, 136, 32, 0.8) 112.99%)",
          textAlign: { xs: "center", md: "left" }, // Center-align text on smaller screens
          px: { xs: 0, sm: 2, md: 8 }, // Padding adjustments
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "24px", sm: "32px", md: "40px" }, // Responsive font size
            fontWeight: 700,
          }}
        >
          APPLY TODAY!
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            fontWeight: 500,
            width: { xs: "90%", sm: "75%", md: "40%" }, // Responsive width
            mt: 2,
          }}
        >
          We accept the Standard Application Online. When you click the link
          below you will be brought to a third-party site that allows you to
          apply to hundreds of schools with one application -- not that you need
          to apply to more than one -- but just in case, we try to keep it
          simple.
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            border: "1px solid #FFF",
            height: "50px",
            width: { xs: "150px", sm: "180px", md: "200px" },
            mt: 3,
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
}
