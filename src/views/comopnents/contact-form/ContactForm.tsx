import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../global/theme";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      //   console.log("Form submitted:", formData);
      // Handle form submission (API call, etc.)
      try {
        await emailjs.send(
          "service_ymlp755",
          "template_ixe7vaa",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "B9qpqvfE225C5zbWq"
        );

        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      }

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Box
      sx={{
        width: "95%",
        marginX: "auto",
        marginY: 5,
        backgroundColor: theme.palette.background.paper,
        padding: "40px 0",
        borderRadius: "16px",
      }}
    >
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
          <span style={{ color: theme.palette.text.primary }}>Get in</span>{" "}
          Touch
        </Typography>
        <Typography variant="body1">
          We'd love to hear from you! Just fill out the contact form, and our
          team will be in touch.
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid2
          container
          spacing={2}
          sx={{ width: { xs: "95%", md: "60%" }, marginX: "auto" }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
              multiline
              rows={4}
            />
          </Grid2>
          <Grid2 size={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "200px", padding: "10px" }}
              >
                Submit
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
