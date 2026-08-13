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
import { useLocation, Link as RouterLink } from "react-router-dom";
import schoolLogo from "../../assets/schoolLogo.webp";
import { SITE } from "../../config/site";

const menuItems = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Infrastructure", link: "/infrastructure" },
  { title: "Admissions", link: "/admissions" },
  { title: "Academics", link: "/academics" },
  { title: "Contact Us", link: "/contactus" },
];

export default function MobileMenuBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const currentPath = location.pathname === "/" ? "/home" : location.pathname;

  return (
    <>
      <AppBar
        sx={{
          height: "10vh",
          width: "100%",
          background: "transparent",
          boxShadow: "none",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          component="nav"
          aria-label="Main navigation"
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
            <RouterLink to="/" aria-label={`${SITE.name} — home`}>
              <img
                src={schoolLogo}
                height="45px"
                width="66px"
                alt={`${SITE.name} logo`}
              />
            </RouterLink>
          </Box>

          <IconButton
            sx={{ color: "#000" }}
            onClick={toggleDrawer(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
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
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((page) => (
              <ListItem
                button
                key={page.title}
                component={RouterLink}
                to={page.link}
                onClick={toggleDrawer(false)}
                aria-current={currentPath === page.link ? "page" : undefined}
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
