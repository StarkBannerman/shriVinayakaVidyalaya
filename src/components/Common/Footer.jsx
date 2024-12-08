import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import schoolLogo from "../../assets/schoolLogo.png";

export default function Footer() {
  const useFullLinks = [
    {
      title: "Admission",
      link: "https://shrivinayakavidyalaya.com/admissions",
    },
    {
      title: "Infrastructure",
      link: "https://shrivinayakavidyalaya.com/infrastructure",
    },
    {
      title: "About",
      link: "https://shrivinayakavidyalaya.com/admissions",
    },
  ];

  const updateLinks = [
    { title: "News & Events", link: "https://shrivinayakavidyalaya.com" },
    { title: "Contact Us", link: "https://shrivinayakavidyalaya.com" },
  ];

  const legalLinks = [
    { title: "Terms & Conditions", link: "https://shrivinayakavidyalaya.com" },
    { title: "Privacy Policy", link: "https://shrivinayakavidyalaya.com" },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFF", p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/* School Logo and Address Section */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          // sx={{ textAlign: { xs: "center", sm: "" } }}
        >
          <Box
            sx={{
              display: "flex",

              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={schoolLogo}
              alt="School Logo"
              height="70px"
              width="100px"
            />
          </Box>
          <Typography
            sx={{
              mt: 2,
              color: "#555",
              fontSize: { xs: "14px", md: "16px", width: "90%" },
            }}
          >
            Shri, 10, 1st Main Rd, Guru Raghavendra Nagar, Eswara Layout, JP
            Nagar 7th Phase, Arekere, Bengaluru, Kothnur, Karnataka 560078
          </Typography>
        </Grid>

        {/* Useful Links Section */}
        <Grid item xs={6} sm={6} md={2.5} lg={2.5}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "18px", md: "20px" },
              color: "#181B32",
            }}
          >
            Useful Links
          </Typography>
          {useFullLinks.map((linkObj, index) => (
            <Link
              key={index}
              href={linkObj.link}
              sx={{
                display: "block",
                mt: 2,
                color: "#555",
                textDecoration: "none",
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": { color: "#000" },
              }}
            >
              {linkObj.title}
            </Link>
          ))}
        </Grid>

        {/* Updates Section */}
        <Grid item xs={6} sm={6} md={2.5} lg={2.5}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "18px", md: "20px" },
              color: "#181B32",
            }}
          >
            Updates
          </Typography>
          {updateLinks.map((linkObj, index) => (
            <Link
              key={index}
              href={linkObj.link}
              sx={{
                display: "block",
                mt: 2,
                color: "#555",
                textDecoration: "none",
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": { color: "#000" },
              }}
            >
              {linkObj.title}
            </Link>
          ))}
        </Grid>

        {/* Legal Links Section */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "18px", md: "20px" },
              color: "#181B32",
            }}
          >
            Legal
          </Typography>
          {legalLinks.map((linkObj, index) => (
            <Link
              key={index}
              href={linkObj.link}
              sx={{
                display: "block",
                mt: 2,
                color: "#555",
                textDecoration: "none",
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": { color: "#000" },
              }}
            >
              {linkObj.title}
            </Link>
          ))}
        </Grid>

        {/* Social Media Icons Section */}
        <Grid item xs={6} sm={3} md={1.5} lg={1.5}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "18px", md: "20px" },
              color: "#181B32",
            }}
          >
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 2,
              flexDirection: "row",
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=100093646530865"
              sx={{ color: "#555", "&:hover": { color: "#3b5998" }, mb: 1 }}
            >
              <Facebook />
            </IconButton>
            {/* <IconButton
              component="a"
              href="https://twitter.com"
              sx={{ color: "#555", "&:hover": { color: "#00acee" }, mb: 1 }}
            >
              <Twitter />
            </IconButton> */}
            <IconButton
              component="a"
              href="https://www.instagram.com/shrivinayakavidyalaya?igsh=MXMzM3l4ZjI3YXZ5cw=="
              sx={{ color: "#555", "&:hover": { color: "#E4405F" } }}
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid #ddd",
          mt: 4,
          pt: 2,
          color: "#777",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        <Typography variant="body2">
          &copy; 2024 Shri Vinayaka Vidyalaya. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
