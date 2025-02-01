import { Box, Typography } from "@mui/material";
import theme from "../../../global/theme";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CafeInteriors() {
  const images = [
    {
      src: "https://images.pexels.com/photos/30318149/pexels-photo-30318149/free-photo-of-romantic-couple-enjoying-coffee-in-a-cozy-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 3",
    },
    {
      src: "https://images.pexels.com/photos/19274965/pexels-photo-19274965/free-photo-of-men-in-bar-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 4",
    },
    {
      src: "https://images.pexels.com/photos/16552425/pexels-photo-16552425/free-photo-of-restaurant-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 5",
    },
    {
      src: "https://images.pexels.com/photos/29866016/pexels-photo-29866016/free-photo-of-charming-indoor-floral-decor-in-cozy-cafe-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 6",
    },
  ];

  const settings = {
    dots: true,
    rtl: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
    id="cafeInteriors"
      sx={{
        width: "95%",
        marginX: "auto",
        marginTop: 9,
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          marginBottom: 4,
          fontWeight: "bold",
          color: theme.palette.secondary.dark,
        }}
      >
        Cafe & Restaurant
        <span style={{ color: theme.palette.text.primary }}>
          {" "}
          Interiors
        </span>{" "}
      </Typography>
      <Grid container spacing={4}>
        {/* Left Side - Text */}
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              marginBottom: 2,
            }}
          >
            Beautiful Cafe Interiors
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
            Our cafes are designed to create a warm and inviting atmosphere for
            every visitor. From sleek modern furniture to subtle earthy tones,
            every detail is carefully crafted to elevate your dining experience.
            Explore the blend of style and comfort in our uniquely designed
            interiors.
          </Typography>
        </Grid>

        {/* Right Side - Slider */}
        <Grid size={{ md: 6, xs: 12 }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover", // Ensures image covers the box without distortion
                    borderRadius: "16px", // Rounded corners for the image itself
                    transition: "opacity 0.3s ease-in-out", // Smooth fade effect
                  }}
                />

                {/* Hover effect on container */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    "&:hover": {
                      opacity: 0, // Hide the overlay when hovered
                    },
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
