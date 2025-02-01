import { Box, Typography } from "@mui/material";
import theme from "../../../global/theme";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ModularFurniture() {
  const images = [
    {
      src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cozy Café Setting",
    },
    {
      src: "https://images.pexels.com/photos/5698007/pexels-photo-5698007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Stylish Bar Interior",
    },
    {
      src: "https://images.pexels.com/photos/8583594/pexels-photo-8583594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Restaurant Ambience",
    },
    {
      src: "https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Restaurant Ambience",
    },
    {
      src: "https://images.pexels.com/photos/7195737/pexels-photo-7195737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        Modular{" "}
        <span style={{ color: theme.palette.text.primary }}>Furniture</span>
      </Typography>
      <Grid container spacing={4}>
        {/* Left Side - Slider */}
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
            Smart, Stylish, and Space-Saving
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
            Our modular furniture adapts to your space with customizable,
            space-saving designs. Crafted for style and functionality, it
            seamlessly blends comfort with innovation. Transform your home or
            office effortlessly with modern, versatile solutions.
          </Typography>
        </Grid>

        {/* Right Side - Description */}
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
      </Grid>
    </Box>
  );
}
