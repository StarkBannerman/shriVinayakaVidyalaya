
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
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        studentName: "",
        studentAge: "",
        program: "",
        message: "",
      });
    }
  };

  const programs = [
    "Early Childhood Program",
    "Primary School Program",
    "Middle School Program",
    "High School Program",
    "Special Education Program",
    "Summer Camp",
  ];

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
          maxWidth: "1400px",
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
          Contact Form
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
          Student Information
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
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <IconButton
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
            sx={{
              border: "1px solid #F68820",
              borderRadius: "4px",
              color: "#F68820",
              p: 1,
              width: "60px",
              height: "40px",
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid #F68820",
              borderRadius: "4px",
              color: "#F68820",
              p: 1,
              width: "60px",
              height: "40px",
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

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
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
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
                  Program of Intrest
                </Typography>
                <FormControl
                  fullWidth
                  error={!!errors.program}
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
                    {programs.map((program) => (
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
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
