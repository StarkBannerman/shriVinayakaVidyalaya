"use client";

import { ACADEMICS } from "../../content/academics";
import { clamp } from "../../content/clamp";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import downArrow from "../../assets/leftDownArrow.webp";
import checkedBackground from "../../assets/checkedBackground.webp";
import { useMediaQueries } from "../../utils/Breakpoints";

// Styled components for better design
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  borderRadius: "16px",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
}));

const StyledCardHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "photo",
})(({ photo }) => ({
  height: "200px",
  // The school's photo when one is uploaded; the checked pattern otherwise.
  // The gradient below keeps the text legible over either.
  backgroundImage: `url(${photo || checkedBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(246, 136, 32, 0.8) 0%, rgba(251, 190, 24, 0.8) 100%)",
  },
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(6),
}));

const TitleBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #F68820 0%, #FBBE18 100%)",
  borderRadius: "24px",
  padding: theme.spacing(3, 4),
  position: "relative",
  zIndex: 1,
  boxShadow: "0 8px 32px rgba(246, 136, 32, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "24px",
    padding: "2px",
    background: "linear-gradient(135deg, #F68820, #FBBE18)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  },
}));

export default function Subjects() {
  const subjects = ACADEMICS.electives;
  const { isMobile } = useMediaQueries();

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Header Section */}
      <HeaderSection>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 2,
            mb: 4,
          }}
        >
          {!isMobile && (
            <Box
              component="img"
              src={downArrow}
              sx={{
                height: { xs: 60, md: 120 },
                width: { xs: 80, md: 160 },
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              }}
            />
          )}

          <TitleBox>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                color: "#FFF",
                fontWeight: 800,
                textAlign: "center",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "-0.02em",
              }}
            >
              {ACADEMICS.electivesHeading}
            </Typography>
          </TitleBox>
        </Box>
      </HeaderSection>

      {/* Introduction Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 700,
            mb: 3,
            background: "linear-gradient(135deg, #F68820 0%, #FBBE18 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {ACADEMICS.electivesSubheading}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: 400,
            color: "#555",
            lineHeight: 1.8,
            maxWidth: "900px",
            mx: "auto",
            mb: 4,
          }}
        >
          {ACADEMICS.electivesTagline}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 400,
            color: "#737373",
            lineHeight: 1.7,
            maxWidth: "1000px",
            mx: "auto",
            textAlign: "justify",
          }}
        >
          {ACADEMICS.electivesIntro}
        </Typography>
      </Box>

      {/* Subjects Grid */}
      <Grid container spacing={4}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} lg={4} key={subject.title}>
            <StyledCard>
              <StyledCardHeader photo={subject.image}>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FFF",
                      fontWeight: 700,
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      mb: 1,
                      ...clamp(2),
                    }}
                  >
                    {subject.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#FFF",
                      fontWeight: 500,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      opacity: 0.9,
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      ...clamp(2),
                    }}
                  >
                    {subject.subtitle}
                  </Typography>
                </Box>
              </StyledCardHeader>

              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    ...clamp(6),
                  }}
                >
                  {subject.desc}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
