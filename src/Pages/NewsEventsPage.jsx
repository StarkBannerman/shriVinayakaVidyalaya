import { Box, Toolbar } from "@mui/material";
import ResponsiveMenuBar from "../components/Common/Menu";

import Footer from "../components/Common/Footer";
import NewsIntro from "../components/News/NewsPageIntro";
import NewsList from "../components/News/newsList";
import Seo from "../components/Common/Seo";

export default function NewsPage() {
  return (
    <Box>
      <ResponsiveMenuBar />
      <Seo
        title="News & Events"
        description="Latest news, celebrations and upcoming events at Shri Vinayaka Vidyalaya, JP Nagar, Bengaluru."
      />
      <Toolbar />
      <NewsIntro />
      <NewsList />
      <Footer />
    </Box>
  );
}
