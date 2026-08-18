import React, { useState } from "react";
import {
  AppBar,
  Box,
  Link,
  IconButton,
  Drawer,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import schoolLogo from "../../assets/schoolLogo.webp";
import { SITE } from "../../config/site";

const pages = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Infrastructure", link: "/infrastructure" },
  { title: "Academics", link: "/academics" },
  { title: "Admissions", link: "/admissions" },
  { title: "News", link: "/news" },
  { title: "Contact Us", link: "/contactus" },
];

// The AppBar is position:fixed, so pages must reserve the same height below it.
// Both sides read this one object — a plain <Toolbar /> is 64px and does not
// match, which let the transparent AppBar overlap the top of the content.
// minHeight keeps the 70px nav pill inside the bar on short (landscape) viewports.
export const HEADER_HEIGHT = { xs: "10vh", sm: "15vh" };
export const HEADER_MIN_HEIGHT = { xs: "72px", sm: "90px" };

export function HeaderSpacer() {
  return (
    <Box
      aria-hidden
      sx={{ height: HEADER_HEIGHT, minHeight: HEADER_MIN_HEIGHT }}
    />
  );
}

export default function ResponsiveMenuBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for smaller screens
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Derive the active item from the URL rather than from click state, so a
  // direct load of /about highlights About instead of always highlighting Home.
  const currentPath = location.pathname === "/" ? "/home" : location.pathname;
  const activeIndex = pages.findIndex((page) => page.link === currentPath);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      sx={{
        height: HEADER_HEIGHT,
        minHeight: HEADER_MIN_HEIGHT,
        width: "100%",
        background: "transparent",
        boxShadow: "none",
        display: "grid",
        placeItems: "center",
        // Transparent, but still fixed and above the page: without this the
        // empty area around the nav pill swallows clicks on the content below.
        pointerEvents: "none",
      }}
    >
      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{
          width: "90vw",
          height: isMobile ? "55px" : "70px",
          backgroundColor: "#FFF",
          borderRadius: isMobile ? "10px" : "20px",
          pl: 1,
          pr: 2,
          mt: isMobile ? 2 : 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "auto",
        }}
      >
        {/* Logo */}
        <Box sx={{ ml: isMobile ? 2 : 4 }}>
          <RouterLink to="/" aria-label={`${SITE.name} — home`}>
            <img
              src={schoolLogo}
              height={isMobile ? "45px" : "50px"}
              width={isMobile ? "66px" : "75px"}
              alt={`${SITE.name} logo`}
            />
          </RouterLink>
        </Box>

        {isMobile || isTablet ? (
          // Mobile Menu (Tabs within a Drawer)
          <>
            <IconButton
              sx={{ color: "#000" }}
              onClick={toggleDrawer(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <IconButton
                  sx={{ alignSelf: "flex-end", m: 1 }}
                  onClick={toggleDrawer(false)}
                  aria-label="Close navigation menu"
                >
                  <CloseIcon />
                </IconButton>
                <Tabs
                  orientation="vertical"
                  value={activeIndex === -1 ? false : activeIndex}
                  sx={{
                    "& .MuiTab-root": {
                      color: "#000",
                      fontWeight: "normal",
                      "&.Mui-selected": {
                        fontWeight: "bold",
                        color: "#F68820",
                      },
                    },
                    "& .MuiTabs-indicator": { backgroundColor: "#F68820" },
                  }}
                >
                  {pages.map((page) => (
                    <Tab
                      key={page.title}
                      label={page.title}
                      component={RouterLink}
                      to={page.link}
                      onClick={toggleDrawer(false)}
                    />
                  ))}
                </Tabs>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop Menu (Inline)
          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.title}
                component={RouterLink}
                to={page.link}
                variant="body1"
                underline="none"
                aria-current={currentPath === page.link ? "page" : undefined}
                sx={{
                  color: "#000000",
                  cursor: "pointer",
                  fontWeight: currentPath === page.link ? "bold" : "normal",
                  "&:hover": {
                    color: "#F68820",
                  },
                }}
              >
                {page.title}
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </AppBar>
  );
}
