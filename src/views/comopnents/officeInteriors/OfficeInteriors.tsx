import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import theme from "../../../global/theme";

export default function OfficeInteriors() {
  const images = [
    {
      src: "https://images.pexels.com/photos/4064449/pexels-photo-4064449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 1",
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 2",
    },
    {
      src: "https://images.pexels.com/photos/4064449/pexels-photo-4064449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 3",
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 4",
    },
    {
      src: "https://images.pexels.com/photos/4064449/pexels-photo-4064449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Office 5",
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <Box sx={{
      // backgroundColor: theme.palette.background.paper,
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center", 
    }}>

    <Box sx={{ width: "95%", marginX: "auto", marginTop: 4 }}>
      <Box
        sx={{
          mb: 2,
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
            marginBottom: 1,
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          Office Interiors
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
              paddingX: 1,
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
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
    </Box>
  );
}
