"use client";

import { Box, Grid, Typography, Pagination } from "@mui/material";
import { useState } from "react";
import downArrow from "../../assets/leftDownArrow.webp";
import { useMediaQueries } from "../../utils/Breakpoints";
import { NEWS_EVENTS } from "../../content/news";

export default function NewsList() {
  const { isMobile } = useMediaQueries();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 items per page (2 rows of 3)

  const newsArticles = NEWS_EVENTS;

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
            loading="lazy"
            decoding="async"
          />
        ) : (
          <img
            src={downArrow || "/placeholder.svg"}
            style={{ marginTop: "120px", height: "150px", width: "200px" }}
            alt="Arrow"
            loading="lazy"
            decoding="async"
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
                    {article.name}
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
                {article.name}
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
