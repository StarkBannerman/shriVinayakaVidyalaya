import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Drawer,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import schoolLogo from "../../assets/schoolLogo.png";

export default function ResponsiveMenuBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0); // To control the selected tab
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for smaller screens
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const pages = [
    { title: "Home", link: "/home" },
    { title: "About", link: "/about" },
    { title: "Infrastructure", link: "/infrastructure" },
    { title: "Academics", link: "/academics" },
    { title: "Admissions", link: "/admissions" },
    // { title: "Testimonials", link: "/testimonials" },
    // { title: "News & Events", link: "/news" },
    { title: "Contact Us", link: "/contactus" },
  ];

  const handleMenuClick = (page, index) => {
    navigate(page.link);
    setDrawerOpen(false); // Close the drawer in mobile view
    setTabValue(index); // Set active tab on click
  };

  const currentPath = location.pathname;
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      sx={{
        height: isMobile ? "10vh" : "15vh",
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
        }}
      >
        {/* Logo */}
        <Box sx={{ ml: isMobile ? 2 : 4 }}>
          <img
            src={schoolLogo}
            height={isMobile ? "45px" : "50px"}
            width={isMobile ? "66px" : "75px"}
            alt="School Logo"
          />
        </Box>

        {isMobile || isTablet ? (
          // Mobile Menu (Tabs within a Drawer)
          <>
            <IconButton sx={{ color: "#000" }} onClick={toggleDrawer(true)}>
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
                >
                  <CloseIcon />
                </IconButton>
                <Tabs
                  orientation="vertical"
                  value={tabValue}
                  onChange={(e, newValue) => setTabValue(newValue)}
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
                  {pages.map((page, index) => (
                    <Tab
                      key={page.title}
                      label={page.title}
                      onClick={() => handleMenuClick(page, index)}
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
            {pages.map((page, index) => (
              <Typography
                key={page.title}
                onClick={() => handleMenuClick(page, index)}
                variant="body1"
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
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </AppBar>
  );
}
