import { Box, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../assets/sos-logo.webp"; // Replace with your logo path
import theme from "../global/theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        color: "text.primary",
        textAlign: "center",
        py: 4,
        px: 2,
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          width="50px"
          style={{ marginRight: "10px" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Sun o Sea Design House
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <IconButton
          component={Link}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.secondary" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.secondary" }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.secondary" }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.secondary" }}
        >
          <LinkedIn />
        </IconButton>
      </Box>

      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Sun o Sea Design House. All rights
        reserved.
      </Typography>
    </Box>
  );
}
