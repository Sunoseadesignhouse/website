// import './App.css'
import { ThemeProvider, CssBaseline } from "@mui/material";
// import ComingSoon from "./pages/ComingSoon";
import Navbar from "./components/Navbar";
import theme from "./global/theme";
import Views from "./views/Views";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Views />
      </ThemeProvider>
    </>
  );
}

export default App;
