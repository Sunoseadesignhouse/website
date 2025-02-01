import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import theme from "../../../global/theme";

export default function OfficeInteriors() {
  const images = [
    {
      src: "https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 1",
    },
    {
      src: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 2",
    },
    {
      src: "https://images.pexels.com/photos/5506031/pexels-photo-5506031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 3",
    },
    {
      src: "https://images.pexels.com/photos/16323454/pexels-photo-16323454/free-photo-of-men-working-on-laptop-in-coworking-space.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 4",
    },
    {
      src: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 5",
    },
    {
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 6",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increase the speed for smoother transitions (1000ms = 1 second)
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time in milliseconds between slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      id="officeInteriors"
      sx={{
        width: "95%",
        marginX: "auto",
        marginY: 4,
        backgroundColor: theme.palette.background.paper,
        padding: "40px 0",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          mb: 4,
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginX: "auto",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            color: theme.palette.secondary.dark,
          }}
        >
          Office{" "}
          <span style={{ color: theme.palette.text.primary }}>Interiors</span>
        </Typography>
        <Typography variant="body1" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          perspiciatis nam, iusto, nesciunt doloremque neque quod nulla expedita
          voluptas velit fugiat, at incidunt eaque aspernatur quia enim? Eius,
          tempora a!
        </Typography>
      </Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              paddingX: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                // borderRadius: "16px",
                // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
