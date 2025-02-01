import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Slide,
  useScrollTrigger,
  Button,
} from "@mui/material";
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
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: theme.palette.background.default,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: "1",
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexGrow: 1,
                }}
              >
                <Button
                  href="#officeInteriors"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  Office Interiors
                </Button>
                <Button
                  href="#cafeInteriors"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  Cafe Interiors
                </Button>
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
                <Button
                  href="#architectural"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  Architectural
                </Button>
                <Button
                  href="#3dDesign"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  3D Design
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
