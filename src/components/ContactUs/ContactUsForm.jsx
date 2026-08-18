"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  IconButton,
  Paper,
  FormControl,
  Select,
  FormHelperText,
  useTheme,
  useMediaQuery,
  Alert,
  CircularProgress,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import emailjs from "@emailjs/browser";
import { SITE } from "../../config/site";
import { CONTACT } from "../../content/contact";

export default function ContactForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    studentAge: "",
    program: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  // Spam trap: hidden from users, but bots fill every field they find.
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.parentName) newErrors.parentName = "Parent name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.studentName)
      newErrors.studentName = "Student name is required";
    if (!formData.studentAge) newErrors.studentAge = "Student age is required";
    if (!formData.program) newErrors.program = "Please select a program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Silently drop bot submissions — no error shown, so scrapers get no signal.
    if (honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = "service_mc45f2o"; // Add your EmailJS service ID here
      const templateId = "template_5qi0dpo"; // Your template ID
      const publicKey = "wppd0ET9DmNagPg6u"; // Add your EmailJS public key here

      // Template parameters that will be sent to EmailJS
      const templateParams = {
        to_email: SITE.email,
        parent_name: formData.parentName,
        parent_email: formData.email,
        parent_phone: formData.phone,
        student_name: formData.studentName,
        student_age: formData.studentAge,
        program: formData.program,
        message: formData.message || "No additional message provided",
        submission_date: new Date().toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        submission_time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          studentName: "",
          studentAge: "",
          program: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(255, 248, 235, 0.5)",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 4, sm: 6, md: 8 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          // A two-column form reads badly when the fields are metres wide.
          maxWidth: "920px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#333333",
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "30px", sm: "34px", md: "40px" },
          }}
        >
          {CONTACT.formHeading}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "#F68820",
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "38px", md: "44px" },
            mb: 2,
            textAlign: "center",
          }}
        >
          {CONTACT.formSubheading}
        </Typography>

        <Typography
          sx={{
            color: "#333333",
            fontSize: { xs: "14px", sm: "16px" },
            textAlign: "center",
            maxWidth: "800px",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          {CONTACT.formIntro}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <IconButton
            component="a"
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.name} on Facebook`}
            sx={{
              border: "1px solid #F68820",
              borderRadius: "4px",
              color: "#F68820",
              p: 1,
              width: "60px",
              height: "40px",
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.name} on Instagram`}
            sx={{
              border: "1px solid #F68820",
              borderRadius: "4px",
              color: "#F68820",
              p: 1,
              width: "60px",
              height: "40px",
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href={`tel:${SITE.phoneHref}`}
            aria-label={`Call ${SITE.name} on ${SITE.phone}`}
            sx={{
              border: "1px solid #F68820",
              borderRadius: "4px",
              color: "#F68820",
              p: 1,
              width: "60px",
              height: "40px",
            }}
          >
            <PhoneIcon />
          </IconButton>
        </Box>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <Alert
            severity="success"
            sx={{ mb: 3, width: "100%", maxWidth: "600px" }}
          >
            {CONTACT.successMessage}
          </Alert>
        )}

        {submitStatus === "error" && (
          <Alert
            severity="error"
            sx={{ mb: 3, width: "100%", maxWidth: "600px" }}
          >
            {CONTACT.errorMessage} {SITE.email} or {SITE.phone}.
          </Alert>
        )}

        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 5, md: 6 },
            borderRadius: "16px",
            width: "100%",
            backgroundColor: "#FFFFFF",
            border: "1px solid #F0F0F0",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -1,
              right: -1,
              left: -1,
              height: "8px",
              background: "#F68820",
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Honeypot — visually hidden and skipped by assistive tech. */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Parent Name
                </Typography>
                <TextField
                  fullWidth
                  name="parentName"
                  placeholder="Enter Parent Name"
                  value={formData.parentName}
                  onChange={handleChange}
                  error={!!errors.parentName}
                  helperText={errors.parentName}
                  variant="outlined"
                  disabled={isSubmitting}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      padding: isMobile ? "10px 12px" : "12px 14px",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  disabled={isSubmitting}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      padding: isMobile ? "10px 12px" : "12px 14px",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Phone Number
                </Typography>
                <TextField
                  fullWidth
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  variant="outlined"
                  disabled={isSubmitting}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      padding: isMobile ? "10px 12px" : "12px 14px",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Student Name
                </Typography>
                <TextField
                  fullWidth
                  name="studentName"
                  placeholder="Enter Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                  error={!!errors.studentName}
                  helperText={errors.studentName}
                  variant="outlined"
                  disabled={isSubmitting}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      padding: isMobile ? "10px 12px" : "12px 14px",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Student Age
                </Typography>
                <TextField
                  fullWidth
                  name="studentAge"
                  placeholder="Enter Student Age"
                  value={formData.studentAge}
                  onChange={handleChange}
                  error={!!errors.studentAge}
                  helperText={errors.studentAge}
                  variant="outlined"
                  disabled={isSubmitting}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      padding: isMobile ? "10px 12px" : "12px 14px",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Program of Interest
                </Typography>
                <FormControl
                  fullWidth
                  error={!!errors.program}
                  disabled={isSubmitting}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                >
                  <Select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={
                      formData.program !== ""
                        ? undefined
                        : () => (
                            <Typography sx={{ color: "#aaa" }}>
                              Select Program
                            </Typography>
                          )
                    }
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      height: isMobile ? "42px" : "48px",
                    }}
                  >
                    {CONTACT.programs.map((program) => (
                      <MenuItem key={program} value={program}>
                        {program}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.program && (
                    <FormHelperText>{errors.program}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ mb: 1, fontWeight: 500, color: "#333333" }}>
                  Message
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  placeholder="Enter your Message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  disabled={isSubmitting}
                  InputProps={{
                    style: { fontSize: "16px", padding: "12px 14px" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    py: 2,
                    backgroundColor: "#F68820",
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: 600,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E67810",
                    },
                    "&:disabled": {
                      backgroundColor: "#ccc",
                    },
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress
                        size={24}
                        sx={{ mr: 2, color: "white" }}
                      />
                      Sending to School...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
