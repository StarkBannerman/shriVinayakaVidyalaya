import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import schoolLogo from "../../assets/schoolLogo.webp";
import { SITE } from "../../config/site";
import { FOOTER } from "../../content/footer";
import { SocialIcon, socialMeta } from "../../content/socialRegistry";

export default function Footer() {
  const useFullLinks = FOOTER.usefulLinks;
  const updateLinks = FOOTER.updateLinks;
  const legalLinks = FOOTER.legalLinks;

  return (
    <Box
      component="footer"
      sx={{ width: "100%", backgroundColor: "#FFF", p: { xs: 2, md: 4 } }}
    >
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
              alt={`${SITE.name} logo`}
              height="70px"
              width="100px"
              loading="lazy"
              decoding="async"
            />
          </Box>
          <Typography
            component="address"
            sx={{
              mt: 2,
              color: "#555",
              fontStyle: "normal",
              fontSize: { xs: "14px", md: "16px", width: "90%" },
            }}
          >
            {FOOTER.address}
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
              key={linkObj.title}
              component={RouterLink}
              to={linkObj.link}
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
              key={linkObj.title}
              component={RouterLink}
              to={linkObj.link}
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
              key={linkObj.title}
              component={RouterLink}
              to={linkObj.link}
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
            {FOOTER.socials.map((social) => {
              const { label, hover } = socialMeta(social.platform);
              return (
                <IconButton
                  key={social.platform + social.url}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on ${label}`}
                  sx={{ color: "#555", "&:hover": { color: hover }, mb: 1 }}
                >
                  <SocialIcon platform={social.platform} />
                </IconButton>
              );
            })}
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
          &copy; {new Date().getFullYear()} {FOOTER.copyrightName}. All Rights
          Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
