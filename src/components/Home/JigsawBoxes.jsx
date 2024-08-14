import { Box } from "@mui/material";

export default function JigsawBoxes() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "red",
        width: "auto",
        ml: 20,
        mb: 20,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "150px",
          height: "150px",
          borderRadius: "6px",
        }}
      >
        {/* L-shaped background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "75px",
            height: "150px",
            backgroundColor: "green",
            borderRadius: "6px 6px 0px 6px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "75px",
            left: "75px",
            width: "75px",
            height: "75px",
            backgroundColor: "blue",
            borderRadius: "0 0 6px 0",
          }}
        />
        {/* Inner box to fill the remaining space */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            ml: 0.8,
            mt: -0.2,
            left: "75px",
            width: "75px",
            height: "70px",
            borderRadius: "6px",
            backgroundColor: "green",
            borderRadius: "0 6px 0 0",
          }}
        />
      </Box>
    </Box>
  );
}
