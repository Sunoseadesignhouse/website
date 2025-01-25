import { AppBar, Box, Toolbar, Slide, useScrollTrigger } from "@mui/material";
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
                width: "100%",
                display: "flex",
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
                p: 3,
              }}
            >
              <img src={logo} alt="Logo" width="50px" />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
