import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import theme from "../../../global/theme";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company A",
      feedback:
        "The 3D design services provided were exceptional. Our office space has never looked better!",
    },
    {
      name: "Jane Smith",
      role: "Manager, Company B",
      feedback:
        "Incredible attention to detail and innovative solutions. Highly recommend their services.",
    },
    {
      name: "Alice Johnson",
      role: "Owner, Company C",
      feedback:
        "From concept to execution, the team delivered beyond our expectations.",
    },
    {
      name: "Bob Brown",
      role: "Director, Company D",
      feedback:
        "Professional, creative, and reliable. Our new office design is a hit!",
    },
    {
      name: "Charlie Davis",
      role: "Founder, Company E",
      feedback:
        "The designs were modern and functional, perfectly matching our vision.",
    },
    {
      name: "Eve White",
      role: "CEO, Company F",
      feedback:
        "A seamless experience from start to finish. Our workspace is now a true reflection of our brand.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
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
      sx={{
        width: "95%",
        mx: "auto",
        my: 4,
        py: 5,
        borderRadius: "16px",
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          mb: 4,
          maxWidth: "900px",
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: theme.palette.secondary.dark }}
        >
          <span style={{ color: theme.palette.text.primary }}>What Our</span>{" "}
          Clients Say
        </Typography>
        <Typography variant="body1">
          Hear from our satisfied clients about their experiences with our 3D
          design services.
        </Typography>
      </Box>

      {/* Testimonials Slider */}
      <Box
        sx={{
          ".slick-slide": {
            padding: "10px",
            display: "flex", // Ensures equal height for each slide
            justifyContent: "center",
          },
          ".slick-list": {
            // marginX: "-10px",
          },
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                padding: 3,
                backgroundColor: theme.palette.background.paper,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: `4px 4px 0px ${theme.palette.primary.main}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
                height: "auto", // Dynamic height
                minHeight: "200px", // Ensures small testimonials don't shrink too much
              }}
            >
              {/* Testimonial Text */}
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                "{testimonial.feedback}"
              </Typography>

              {/* Client Name */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                  mb: 1,
                }}
              >
                {testimonial.name}
              </Typography>

              {/* Client Role */}
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.9rem",
                }}
              >
                {testimonial.role}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
