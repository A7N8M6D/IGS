import { Container, Grid } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureCardSection = () => {
  return (
    <Container maxWidth="2xl" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          height: { xs: "auto", md: "30vh" },
          backgroundColor: "transparent",
          padding: {xs:"0px 20px 0px 40px",md:"0px 90px 0px 90px"},
        }}
      >
        <Grid size={{ xs:12,md: 6, xl: 4 }}>
          <FeatureCard
            heading="Accelerate long-term growth with 1IGS's"
            paragraph="We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success."
            link="Let's Co-Create"
          />
        </Grid>
        <Grid size={{ xs:12,md: 6, xl: 4 }}>
          <FeatureCard
            heading="Accelerate long-term growth with 1IGS's"
            paragraph="We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success."
            link="Let's Co-Create"
          />
        </Grid>
        <Grid size={{ xs:12,md: 6, xl: 4 }}>
          <FeatureCard
            heading="Accelerate long-term growth with 1IGS's"
            paragraph="We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success."
            link="Let's Co-Create"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureCardSection;
