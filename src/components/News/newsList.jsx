"use client";

import { useMemo } from "react";
import { useSearchParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Pagination,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Close";
import downArrow from "../../assets/leftDownArrow.webp";
import { useMediaQueries } from "../../utils/Breakpoints";
import {
  pastEvents,
  applyFilters,
  filterOptions,
  monthName,
  formatEventDate,
} from "../../content/news";

const ITEMS_PER_PAGE = 6; // 2 rows of 3 on desktop

// Filter state lives in the URL so a filtered view can be shared and the
// browser's back button behaves.
const FIELDS = { q: "", month: "", year: "", sort: "newest", page: "1" };

export default function NewsList() {
  const { isMobile } = useMediaQueries();
  const [params, setParams] = useSearchParams();

  const state = Object.fromEntries(
    Object.entries(FIELDS).map(([k, d]) => [k, params.get(k) ?? d]),
  );

  const archive = useMemo(() => pastEvents(), []);
  const options = useMemo(() => filterOptions(archive), [archive]);

  const results = useMemo(
    () =>
      applyFilters(archive, {
        query: state.q,
        month: state.month,
        year: state.year,
        sort: state.sort,
      }),
    [archive, state.q, state.month, state.year, state.sort],
  );

  const totalPages = Math.max(1, Math.ceil(results.length / ITEMS_PER_PAGE));
  // Clamp rather than trust the URL: filtering down from page 3 must not leave
  // the visitor staring at an empty grid.
  const page = Math.min(Math.max(1, Number(state.page) || 1), totalPages);
  const shown = results.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  /** Any filter change resets to page 1; page changes keep the filters. */
  const update = (patch, { keepPage = false } = {}) => {
    const next = { ...state, ...patch };
    if (!keepPage) next.page = "1";
    const clean = new URLSearchParams();
    Object.entries(next).forEach(([k, v]) => {
      if (v && v !== FIELDS[k]) clean.set(k, v);
    });
    setParams(clean, { replace: true });
  };

  const isFiltered = Boolean(state.q || state.month || state.year);
  // Search and sort appear as soon as there is more than one past event. The
  // month and year dropdowns hide themselves individually when they would
  // offer only one option, so they appear as the archive grows.
  const showFilters = archive.length > 1;

  if (archive.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          py: 8,
          mb: 6,
        }}
      >
        <Typography
          sx={{ color: "#777", fontSize: "16px", textAlign: "center", px: 3 }}
        >
          Past events will appear here once they have taken place.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 10 }}>
      {/* Section title — unchanged from the original design */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={downArrow}
          style={
            isMobile
              ? { height: "40px", width: "60px", marginTop: "30px" }
              : { marginTop: "120px", height: "150px", width: "200px" }
          }
          alt=""
          loading="lazy"
          decoding="async"
        />

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

      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        {showFilters && (
          <Box
            sx={{
              width: "95%",
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <TextField
              value={state.q}
              onChange={(e) => update({ q: e.target.value })}
              placeholder="Search events"
              size="small"
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 240px" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: "#FFF",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#999", fontSize: "20px" }} />
                  </InputAdornment>
                ),
                endAdornment: state.q ? (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      aria-label="Clear search"
                      onClick={() => update({ q: "" })}
                    >
                      <ClearIcon sx={{ fontSize: "16px" }} />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              }}
            />

            {options.months.length > 1 && (
              <FormControl size="small" sx={{ minWidth: 130 }}>
                <Select
                  value={state.month}
                  onChange={(e) => update({ month: e.target.value })}
                  displayEmpty
                  aria-label="Filter by month"
                  sx={{ borderRadius: "8px", backgroundColor: "#FFF" }}
                >
                  <MenuItem value="">All months</MenuItem>
                  {options.months.map((m) => (
                    <MenuItem key={m} value={m}>
                      {monthName(m)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {options.years.length > 1 && (
              <FormControl size="small" sx={{ minWidth: 110 }}>
                <Select
                  value={state.year}
                  onChange={(e) => update({ year: e.target.value })}
                  displayEmpty
                  aria-label="Filter by year"
                  sx={{ borderRadius: "8px", backgroundColor: "#FFF" }}
                >
                  <MenuItem value="">All years</MenuItem>
                  {options.years.map((y) => (
                    <MenuItem key={y} value={y}>
                      {y}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={state.sort}
                onChange={(e) => update({ sort: e.target.value })}
                aria-label="Sort order"
                sx={{ borderRadius: "8px", backgroundColor: "#FFF" }}
              >
                <MenuItem value="newest">Newest first</MenuItem>
                <MenuItem value="oldest">Oldest first</MenuItem>
              </Select>
            </FormControl>

            {isFiltered && (
              <Chip
                label="Clear filters"
                onDelete={() => update({ q: "", month: "", year: "" })}
                onClick={() => update({ q: "", month: "", year: "" })}
                sx={{
                  backgroundColor: "#FFEAB2",
                  color: "#8A5A00",
                  fontWeight: 600,
                }}
              />
            )}
          </Box>
        )}

        {isFiltered && (
          <Box sx={{ width: "95%", mt: 2 }}>
            <Typography sx={{ color: "#777", fontSize: "14px" }}>
              {results.length === 0
                ? "No events match."
                : `${results.length} event${results.length === 1 ? "" : "s"}`}
            </Typography>
          </Box>
        )}

        {results.length === 0 ? (
          <Box sx={{ width: "95%", py: 6, textAlign: "center" }}>
            <Typography sx={{ color: "#777", fontSize: "16px" }}>
              Nothing found. Try a different month or clear the filters.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ width: "95%", mt: 2 }}>
            {shown.map((article) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={article.id}>
                <Box
                  component={RouterLink}
                  to={`/news/${article.id}`}
                  sx={{ textDecoration: "none", display: "block" }}
                >
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
                      "&:hover": { transform: "translateY(-2px)" },
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
                        {formatEventDate(article.date)}
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
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Read More...
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => {
                update({ page: String(value) }, { keepPage: true });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              color="primary"
              size={isMobile ? "small" : "medium"}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#666",
                  fontWeight: 500,
                  "&.Mui-selected": {
                    backgroundColor: "#F68820",
                    color: "#FFF",
                    "&:hover": { backgroundColor: "#E67810" },
                  },
                  "&:hover": { backgroundColor: "#FFF8EB" },
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
