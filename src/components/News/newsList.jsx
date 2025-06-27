"use client";

import { Box, Grid, Typography, Pagination } from "@mui/material";
import { useState } from "react";
import downArrow from "../../assets/leftDownArrow.png";
import checkedBackground from "../../assets/checkedBackground.png";
import { useMediaQueries } from "../../utils/Breakpoints";

export default function NewsList() {
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useMediaQueries();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 items per page (2 rows of 3)

  // Sample news data - replace with your actual news data
  const newsArticles = [
    {
      id: 1,
      title: "Lorem Ipsum Lorem Ipsum 2023",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-11-01",
    },
    {
      id: 2,
      title: "Lorem Ipsum Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-28",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-25",
    },
    {
      id: 4,
      title: "Lorem Ipsum Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-22",
    },
    {
      id: 5,
      title: "Lorem Ipsum Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-20",
    },
    {
      id: 6,
      title: "Lorem Ipsum Lorem Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-18",
    },
    {
      id: 7,
      title: "Annual Sports Day Highlights",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-15",
    },
    {
      id: 8,
      title: "Science Fair Winners",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-12",
    },
    {
      id: 9,
      title: "New Library Opening",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-10",
    },
    {
      id: 10,
      title: "Art Exhibition Success",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-08",
    },
    {
      id: 11,
      title: "Music Concert Performance",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-05",
    },
    {
      id: 12,
      title: "Student Achievement Awards",
      desc: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem",
      image: checkedBackground,
      date: "2023-10-02",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(newsArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = newsArticles.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {isMobile ? (
          <img
            src={downArrow || "/placeholder.svg"}
            style={{ height: "40px", width: "60px", marginTop: "30px" }}
            alt="Arrow"
          />
        ) : (
          <img
            src={downArrow || "/placeholder.svg"}
            style={{ marginTop: "120px", height: "150px", width: "200px" }}
            alt="Arrow"
          />
        )}

        <Box
          sx={{
            p: 2,
            backgroundColor: "#F68820",
            borderRadius: {
              xs: "15px 0px 0px 15px",
              sm: "15px 15px 0px 15px",
              md: "20px 0px 0px 20px",
              lg: "24px 0px 0px 24px",
            },
            minWidth: { sm: "190px", md: "220px", lg: "500px" },
            ml: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: "18px", md: "25px", lg: "42px" },
              color: "#FFF",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Latest News
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: "95%",
            mt: 2,
          }}
        >
          {currentItems.map((article) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={article.id}>
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  borderRadius: "8px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  backgroundColor: "#888",
                  backgroundImage: `url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mb: 2,
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    p: 1,
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {article.title}
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#000",
                  mb: 1,
                }}
              >
                {article.title}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.5,
                }}
              >
                {article.desc}{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "#F68820",
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Read More...
                </Typography>
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 2,
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size={isMobile ? "small" : "medium"}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#666",
                fontWeight: 500,
                "&.Mui-selected": {
                  backgroundColor: "#F68820",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "#E67810",
                  },
                },
                "&:hover": {
                  backgroundColor: "#FFF8EB",
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
