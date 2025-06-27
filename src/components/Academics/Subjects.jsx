"use client";

import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import downArrow from "../../assets/leftDownArrow.png";
import checkedBackground from "../../assets/checkedBackground.png";
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

const StyledCardHeader = styled(Box)(({ theme }) => ({
  height: "200px",
  backgroundImage: `url(${checkedBackground})`,
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
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useMediaQueries();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const subjects = [
    {
      title: "Le Choir",
      subtitle: "Music, Bhajan, Konnakkol",
      desc: "A space where voices rise in harmony. Whether in Carnatic rhythm or contemporary melodies, Le Choir nurtures rhythm, confidence, and stage presence.",
    },
    {
      title: "Search Lamp",
      subtitle: "Quiz (GK), Sudoku",
      desc: "For curious minds who love the thrill of a challenge. Search Lamp is where general knowledge meets critical thinking and eloquent speaking.",
    },
    {
      title: "Eureka!",
      subtitle: "Abacus, Vedic Maths, Science, Design & Tech",
      desc: "A club for inventors, builders, and thinkers. Eureka! turns logic into creativity and problem-solving into play.",
    },
    {
      title: "Happy Feet",
      subtitle: "Dance (Freestyle & Bharatanatyam)",
      desc: "Movement is expression. Happy Feet celebrates India's rich classical forms and contemporary freedom — one step, beat, and gesture at a time.",
    },
    {
      title: "Tree House",
      subtitle: "Toast masters, Sanskrit, Spoken Spanish",
      desc: "Our Literature & Communication Club where language becomes a tool for connection, creativity, and courage. With Toastmasters-style public speaking, storytelling, and a chance to explore global languages.",
    },
    {
      title: "Physical Education",
      subtitle: "Sports & Fitness",
      desc: "Promoting physical fitness, coordination, and teamwork through various sports and physical activities.",
    },
  ];

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
              Electives & Clubs at SVV
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
          Where Passions Find a Platform
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
          Where Choice Builds Character
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
          At Shri Vinayaka Vidyalaya, we believe that education must celebrate
          individuality and nurture a wide range of intelligences —
          intellectual, artistic, cultural, and emotional. That's why our
          Elective and Club system is not a side offering, but an integrated
          part of the school's academic life, open to all and offered without
          additional charges. Each term, students select from a thoughtfully
          curated list of electives based on their interests — from Vedic Maths
          to Dance, from Toastmasters to Konnakkol. These electives are not
          simply "hobbies" — they are gateways to mastery, joy, and personal
          growth.
        </Typography>
      </Box>

      {/* Subjects Grid */}
      <Grid container spacing={4}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} lg={4} key={subject.title}>
            <StyledCard>
              <StyledCardHeader>
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
