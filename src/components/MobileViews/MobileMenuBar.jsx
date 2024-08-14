import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import schoolLogo from "../../assets/schoolLogo.png";

export default function MobileMenuBar({ onMenuClick }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Academics",
    "Testimonials",
    "News & Events",
    // "Infrastructure",
    // "Contact Us",
  ];

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (section) => {
    onMenuClick(section);
    setDrawerOpen(false); // Close the drawer after clicking
  };

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
            {menuItems.map((text) => (
              <ListItem button key={text} onClick={() => handleMenuClick(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

