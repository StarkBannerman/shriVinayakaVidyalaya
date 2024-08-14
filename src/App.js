import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage";
import { Box } from "@mui/material";
import { useMediaQueries } from "./utils/Breakpoints";
import MobileHomePage from "./Pages/MobileHomePage";

function App() {
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useMediaQueries();
  return <Box>{isMobile ? <MobileHomePage /> : <HomePage />}</Box>;
}

export default App;
