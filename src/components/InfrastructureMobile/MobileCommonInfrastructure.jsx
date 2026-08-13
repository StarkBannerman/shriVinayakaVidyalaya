import { INFRASTRUCTURE } from "../../content/infrastructure";
import { Box, Typography } from "@mui/material";
import downArrow from "../../assets/leftDownArrow.webp";
import transport from "../../assets/bus.webp";
import Library from "../../assets/Library.webp";
import extrcurrilars from "../../assets/extrcurriculars.webp";
// Photos are design, not content — index-matched to the facilities list.
const FACILITY_IMAGES = [Library, extrcurrilars, transport];

export default function MobileCommonFacilities() {
  const commonFacilities = INFRASTRUCTURE.commonFacilities;

  const colorCombinations = [
    {
      primary: "#7214FF",
      secondary: "#C5C4FF",
      tertiary: "#F4EDFF",
    },
    {
      primary: "#F68820",
      secondary: "#FFAF64",
      tertiary: "#FFEAB2",
    },
    {
      primary: "#307B74",
      secondary: "#76B7B1",
      tertiary: "#B0EBE6",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 5,
          justifyContent: "flex-end",
        }}
      >
        <img
          src={downArrow}
          style={{ height: "40px", width: "60px", marginTop: "30px" }}
          alt=""
          loading="lazy"
          decoding="async"
        />

        <Box
          sx={{
            p: 1,
            backgroundColor: "#F68820",
            borderRadius: "10px 0px 0px 10px",
            width: "190px",
            ml: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#FFF",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {INFRASTRUCTURE.commonFacilitiesHeading}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100vw",
          mt: 5,
          display: "grid",
          placeItems: "center",
          gap: 5,
          mb: 5,
        }}
      >
        {commonFacilities.map((facility, index) => {
          // Get the color combination based on the index
          const colorCombo =
            colorCombinations[index % colorCombinations.length];

          return (
            // <Box
            //   key={index}
            //   sx={{
            //     width: "80%",
            //     height: "530px",
            //     display: "flex",
            //     flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            //     mb: 10,
            //   }}
            // >
            //   <Box
            //     sx={{
            //       width: "55%",
            //       height: "100%",
            //     }}
            //   >
            //     <Box
            //       sx={{
            //         height: "25%",
            //         width: "100%",
            //         display: "flex",
            //         flexDirection: "column",
            //         justifyContent: "flex-start",
            //         alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
            //       }}
            //     >
            //       <Box
            //         sx={{
            //           height: "80%",
            //           width: "95%",
            //           backgroundColor: colorCombo.tertiary,
            //           borderRadius: "20px",
            //           display: "grid",
            //           placeItems: "center",
            //         }}
            //       >
            //         <Typography
            //           sx={{
            //             fontSize: "50px",
            //             fontWeight: 700,
            //             color: colorCombo.primary,
            //           }}
            //         >
            //           {facility.title}
            //         </Typography>
            //       </Box>
            //     </Box>

            //     <Box
            //       sx={{
            //         height: "75%",
            //         width: "100%",
            //         borderRadius:
            //           index % 2 === 0
            //             ? "20px 0px 0px 20px"
            //             : "0px 20px 20px 0px",
            //         backgroundColor: colorCombo.secondary,
            //         display: "grid",
            //         placeItems: "center",
            //       }}
            //     >
            //       <Typography
            //         sx={{
            //           fontSize: "16px",
            //           fontWeight: 400,
            //           textAlign: "justify",
            //           m: 3,
            //         }}
            //       >
            //         {facility.desc}
            //       </Typography>
            //     </Box>
            //   </Box>

            //   <Box
            //     sx={{
            //       width: "45%",
            //       height: "100%",
            //       backgroundColor: colorCombo.secondary,
            //       borderRadius:
            //         index % 2 === 0
            //           ? "20px 20px 20px 0px"
            //           : "20px 20px 0px 20px",
            //       display: "grid",
            //       placeItems: "center",
            //     }}
            //   >
            //     <img
            //       src={facility.imageLink}
            //       height={"90%"}
            //       width={"90%"}
            //       style={{ borderRadius: "10px" }}
            //     />
            //   </Box>
            // </Box>
            <Box
              key={index}
              sx={{
                p: 2,
                backgroundColor: colorCombo?.secondary,
                borderRadius: "20px",
                width: "80%",
                // height: "530px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 5,
              }}
            >
              <img
                src={FACILITY_IMAGES[index % FACILITY_IMAGES.length]}
                height={"290px"}
                width={"100%"}
                style={{ borderRadius: "10px", objectFit: "cover" }}
                alt={facility.title}
                loading="lazy"
                decoding="async"
              />

              <Box
                sx={{
                  width: "100%",
                  mt: 2,
                  pt: 1,
                  pb: 1,
                  backgroundColor: colorCombo.tertiary,
                  borderRadius: "10px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: colorCombo.primary,
                  }}
                >
                  {facility.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  textAlign: "justify",
                  width: "100%",
                  m: 3,
                }}
              >
                {facility.desc}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
