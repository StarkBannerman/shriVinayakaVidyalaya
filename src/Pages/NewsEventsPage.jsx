import { Box, Toolbar } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";

import Footer from "../components/Common/Footer";
import NewsIntro from "../components/News/NewsPageIntro";
import NewsList from "../components/News/newsList";

export default function NewsPage() {
  return (
    <Box>
      <ResponsiveMenuBar />
      <Toolbar />
      <NewsIntro />
      <NewsList />
      <Footer />
    </Box>
  );
}
