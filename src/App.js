import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useMediaQueries } from "./utils/Breakpoints";
import backgroundDoodle from "./assets/backgroundDoodle.webp";
import ScrollToTop from "./components/Common/ScrollToTop";

// Route-level code splitting: a visitor landing on /admissions no longer
// downloads the home, about and infrastructure page trees as well.
const HomePage = lazy(() => import("./Pages/HomePage"));
const MobileHomePage = lazy(() => import("./Pages/MobileHomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const MobileAboutPage = lazy(() => import("./Pages/MobileAboutPage"));
const Infrastructure = lazy(() => import("./Pages/Infrastructure"));
const MobileInfrastructure = lazy(() => import("./Pages/MobileInfrastructure"));
const AcademicsPage = lazy(() => import("./Pages/AcademicsPage"));
const Admissions = lazy(() => import("./Pages/Admissions"));
const ContactUsPage = lazy(() => import("./Pages/ContactUs"));
const NewsPage = lazy(() => import("./Pages/NewsEventsPage"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));

function RouteFallback() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <CircularProgress sx={{ color: "#F68820" }} />
    </Box>
  );
}

function App() {
  const { isMobile } = useMediaQueries();

  return (
    <HelmetProvider>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#FFF7E1",
          boxSizing: "border-box", // Ensures padding and borders are included in width
          overflowX: "hidden", // Prevents horizontal overflow
          backgroundImage: `url(${backgroundDoodle})`,
          backgroundRepeat: "repeat", // Makes the image repeat
          backgroundSize: "auto", // Ensures the original size of the image is maintained
        }}
      >
        <BrowserRouter basename="/">
          <ScrollToTop />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route
                path="/"
                element={isMobile ? <MobileHomePage /> : <HomePage />}
              />
              <Route
                path="/home"
                element={isMobile ? <MobileHomePage /> : <HomePage />}
              />
              <Route
                path="/about"
                element={isMobile ? <MobileAboutPage /> : <AboutPage />}
              />
              <Route
                path="/infrastructure"
                element={
                  isMobile ? <MobileInfrastructure /> : <Infrastructure />
                }
              />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Box>
    </HelmetProvider>
  );
}

export default App;
