// import './App.css'
import { ThemeProvider, CssBaseline } from "@mui/material";
// import ComingSoon from "./pages/ComingSoon";
import Navbar from "./components/Navbar";
import theme from "./global/theme";
import Views from "./views/Views";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Views />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
