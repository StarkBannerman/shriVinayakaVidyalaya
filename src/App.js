import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage";
import { Box } from "@mui/material";
import { useMediaQueries } from "./utils/Breakpoints";
import MobileHomePage from "./Pages/MobileHomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import backgroundDoodle from "./assets/backgroundImage.svg";
import MenuBar from "./components/Common/Menu";
import Infrastructure from "./Pages/Infrastructure";
import MobileAboutPage from "./Pages/MobileAboutPage";
import MobileInfrastructure from "./Pages/MobileInfrastructure";
import AcademicsPage from "./Pages/AcademicsPage";
import Admissions from "./Pages/Admissions";
import ContactUsPage from "./Pages/ContactUs";

function App() {
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useMediaQueries();
  // return <Box>{isMobile ? <MobileHomePage /> : <HomePage />}</Box>;
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FFF7E1",
        boxSizing: "border-box", // Ensures padding and borders are included in width
        overflowX: "hidden", // Prevents horizontal overflow
        backgroundImage: `url(${backgroundDoodle})`, // Replace with the path to your image
        backgroundRepeat: "repeat", // Makes the image repeat
        backgroundSize: "auto", // Ensures the original size of the image is maintained
      }}
    >
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/home"
            element={isMobile ? <MobileHomePage /> : <HomePage />}
          ></Route>

          <Route
            path="/about"
            element={isMobile ? <MobileAboutPage /> : <AboutPage />}
          ></Route>
          <Route
            path="/infrastructure"
            element={isMobile ? <MobileInfrastructure /> : <Infrastructure />}
          ></Route>
          {/* <Route path="/academics" element={<AcademicsPage />}></Route> */}
          <Route path="/admissions" element={<Admissions />} />
          {/* <Route path="/contactus" element={<ContactUsPage />}></Route> */}

          <Route
            path="/*"
            element={isMobile ? <MobileHomePage /> : <HomePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
