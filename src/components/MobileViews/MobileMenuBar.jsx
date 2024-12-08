import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import schoolLogo from "../../assets/schoolLogo.png";
import { title } from "framer-motion/client";

export default function MobileMenuBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: "Home", link: "/home" },
    { title: "About", link: "/about" },
    { title: "Infrastructure", link: "/infrastructure" },
    { title: "Admissions", link: "/admissions" },
    // { title: "Academics", link: "/academics" },
    // { title: "Testimonials", link: "/testimonials" },
    // { title: "News & Events", link: "/news" },
    // Add additional items as needed
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (page) => {
    navigate(page.link);
    setDrawerOpen(false); // Close the drawer after clicking
  };

  const currentPath = location.pathname;

  return (
    <>
      <AppBar
        sx={{
          height: "10vh",
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
            height: "55px",
            backgroundColor: "#FFF",
            borderRadius: "10px",
            pl: 1,
            pr: 2,
            mt: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ ml: 2 }}>
            <img
              src={schoolLogo}
              height="45px"
              width="66px"
              alt="School Logo"
            />
          </Box>

          <IconButton sx={{ color: "#000" }} onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
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
          <List>
            {menuItems.map((page) => (
              <ListItem
                button
                key={page.title}
                onClick={() => handleMenuClick(page)}
                sx={{
                  "&:hover": {
                    color: "#F68820",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight:
                          currentPath === page.link ? "bold" : "normal",
                        cursor: "pointer",
                        color: "#000",
                      }}
                    >
                      {page.title}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
