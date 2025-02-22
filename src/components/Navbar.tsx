import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Slide,
  useScrollTrigger,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../global/theme";
import logo from "../assets/sos-logo.webp";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Office Interiors", href: "#officeInteriors" },
    { label: "Cafe Interiors", href: "#cafeInteriors" },
    { label: "Architectural", href: "#architectural" },
    { label: "3D Design", href: "#3dDesign" },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: theme.palette.background.default,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: 1,
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ color: theme.palette.secondary.dark }}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexGrow: 1,
                    }}
                  >
                    <img src={logo} alt="Logo" width="50px" />
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexGrow: 1,
                    }}
                  >
                    {navItems.slice(0, 2).map((item) => (
                      <Button
                        key={item.label}
                        href={item.href}
                        sx={{ color: theme.palette.secondary.dark }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 3,
                    }}
                  >
                    <img src={logo} alt="Logo" width="50px" />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexGrow: 1,
                    }}
                  >
                    {navItems.slice(2).map((item) => (
                      <Button
                        key={item.label}
                        href={item.href}
                        sx={{ color: theme.palette.secondary.dark }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.background.default,
            width: "50%",
          },
        }}
      >
        <List sx={{mt: 7}}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton href={item.href} onClick={handleDrawerToggle}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
