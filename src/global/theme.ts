import { createTheme } from "@mui/material/styles";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1aa8eb", // Primary blue color
    },
    secondary: {
      main: "#fadc60", // Secondary yellow color
    },
    info: {
      main: "#47b8f0", // Lighter blue
    },
    warning: {
      main: "#fdf68d", // Soft yellow
    },
    success: {
      main: "#fdf79e", // Pale yellow
    },
    background: {
      default: "#fff",
      paper: "#F8F6F7",
    },
    text: {
      primary: "#000", // Black text
      secondary: "#4a4a4a", // Slightly lighter text
    },
  },
  typography: {
    fontFamily: "'Cinzel Decorative', 'Cinzel', serif", // Primary font for most headings
    h1: {
      fontFamily: "'Cinzel Decorative', serif",
      fontWeight: 700,
      fontSize: "3rem", // 48px
    },
    h2: {
      fontFamily: "'Cinzel Decorative', serif",
      fontWeight: 700,
      fontSize: "2.5rem", // 40px
    },
    h3: {
      fontFamily: "'Cinzel Decorative', serif",
      fontWeight: 700,
      fontSize: "2rem", // 32px
    },
    h4: {
      fontFamily: "'Cinzel Decorative', serif",
      fontWeight: 700,
      fontSize: "1.75rem", // 28px
    },
    h5: {
      fontFamily: "'Cinzel Decorative', serif",
      fontWeight: 700,
      fontSize: "1.5rem", // 24px
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif", // Secondary font
      fontWeight: 700,
      fontSize: "1.25rem", // 20px
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif", // Secondary font for body1
      fontWeight: 400,
      fontSize: "1rem", // 16px
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif", // Secondary font for body2
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
    },
    subtitle1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "1rem", // 16px
    },
    subtitle2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
    },
    button: {
      textTransform: "none",
      fontFamily: "'Cinzel Decorative', serif",
      fontSize: "0.875rem", // 14px
      fontWeight: 700,
    },
    caption: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
    },
    overline: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded buttons
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
