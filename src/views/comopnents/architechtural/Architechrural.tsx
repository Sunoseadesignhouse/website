import { Box, Typography } from "@mui/material";
import theme from "../../../global/theme";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Architectural() {
  const images = [
    {
      src: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cozy Café Setting",
    },
    {
      src: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Stylish Bar Interior",
    },
    {
      src: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Restaurant Ambience",
    },
  ];

  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      id="architectural"
      sx={{
        width: "95%",
        marginX: "auto",
        marginTop: 9,
        backgroundColor: theme.palette.background.paper,
        padding: "40px 0",
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          marginBottom: 4,
          fontWeight: "bold",
          color: theme.palette.secondary.dark,
          textTransform: "uppercase",
        }}
      >
        Architectural{" "}
        <span style={{ color: theme.palette.text.primary }}>Services</span>
      </Typography>
      <Grid container spacing={4}>
        {/* Left Side - Slider */}
        <Grid size={{ md: 6, xs: 12 }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "16px",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Grid>

        {/* Right Side - Description */}
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            Designing Inspiring Spaces
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "#555",
              fontSize: "1rem",
              fontWeight: "300",
              textAlign: "justify",
            }}
          >
            At the heart of our designs lies a commitment to creating spaces
            that inspire. Our architectural services focus on crafting
            environments that balance style, comfort, and functionality. Whether
            it's a cozy café or a vibrant restaurant, each space is designed
            with you in mind—creating lasting memories for every visitor.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
