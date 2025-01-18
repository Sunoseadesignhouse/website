import { Box, Container, Typography } from "@mui/material";
import image from "../assets/pexels-fotios-photos-1090638.webp";

export default function ComingSoon() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",

          zIndex: 1,
        }}
      />

      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "5px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Sunosea Design House
        </Typography>

        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" },
            fontWeight: "lighter",
            letterSpacing: "1px",
            marginBottom: "30px",
            lineHeight: "1.6",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          A world of modern living is just around the corner!
        </Typography>

        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "15px 30px",
            borderRadius: "10px",
            display: "inline-block",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          Coming Soon
        </Typography>
      </Container>
    </Box>
  );
}
