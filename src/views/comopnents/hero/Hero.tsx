import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "95%",
        height: "100vh", // Full-screen height
        backgroundImage: `url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // Overlay text color
        textAlign: "center",
        overflow: "hidden",
        marginTop: "100px",
        mx: "auto",
      }}
    >
      {/* Overlay Effect (Optional) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with opacity
          zIndex: 1,
        }}
      />

      {/* Overlay Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 3,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to the Hero Section
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto" }}>
          This is a dummy text overlay. You can use this section to highlight
          your website's main content or add a call-to-action button.
        </Typography>
      </Box>
    </Box>
  );
}
