import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureCardSection = () => {
  return (
    <Container maxWidth="2xl" sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
color:"white",
          height: { xs: "auto", md: "30vh" },
          padding: { xs: "0px 20px 0px 40px", md: "0px 90px 0px 90px" },
          backgroundColor: "transparent",
        }}
      >
        <Typography
          component="p"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "58px",
            letterSpacing: 0,
          }}
        >
          Seamless Solutions, Endless Possibilities
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{}}
        >
          <Grid size={{ xs: 12, md: 6, xl: 4 }}>
            <FeatureCard
              heading="Accelerate long-term growth with 1IGS's"
              paragraph="We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success."
              link="Let's Co-Create"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, xl: 4 }}>
            <FeatureCard
              heading="Accelerate long-term growth with 1IGS's"
              paragraph="We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success."
              link="Let's Co-Create"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, xl: 4 }}>
            <FeatureCard
              heading="Accelerate long-term growth with 1IGS's"
              paragraph="We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success."
              link="Let's Co-Create"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureCardSection;
