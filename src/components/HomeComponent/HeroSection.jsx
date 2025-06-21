import React from "react";

import bgImage1 from "../../../public/heroSectio-image-2.png";
import HeroSectionLeftSide from "./HeroSectionLeftSide";

import { Box, Grid } from "@mui/material";
import FeatureCardSection from "./FeatureCardSection";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: {xs:"50vh",md:"80vh"}, // ✅ add fallback for xs
        display: "flex",
        justifyContent: "flex-end", // ✅ better semantic than "end"
        alignItems: "center",
        px: { xs: 2, md: 4 }, // Optional: add horizontal padding for responsiveness
      }}
    >
      <HeroSectionLeftSide />
      <Box
        component="img"
        src={bgImage1}
        alt="img-2"
        sx={{
          position: "absolute",
          right: 0,
          top: { xs: "15%", md: "20%" },
          width: {
            xs: "100%", // Responsive widths

            md: "899px",
          },
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default HeroSection;
