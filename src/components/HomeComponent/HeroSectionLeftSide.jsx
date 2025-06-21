import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CustomizedMenus from "../NavbarComponent/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Container, Grid } from "@mui/material";
import FeatureCardSection from "./FeatureCardSection";

export default function HeroSectionLeftSide() {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        position: "relative",
        zIndex: "20",
        marginLeft: { xs: "5px", md: "20px" },
        border: "none",
        backgroundColor: "transparent",
        border: "none",
        // width:{xs:"xl",md:"2xl"}
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: { md: "75%", xl: "60%" },
          background: "transparent",
          color: "white",
        }}
        xs={{}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            marginRight: { xs: "10px", md: "30px" },
            mt: { xs: 0, md: 1 }, // ✅ reduce or eliminate top margin responsively
          }}
        >
          <Box
            sx={{
              height: "90px",
              width: "10px",
              backgroundColor: "rgba(45, 83, 164, 1)",
            }}
          />
          <Box
            sx={{
              height: "90px",
              width: "10px",
              backgroundColor: "rgba(57, 57, 57, 1)",
            }}
          />
        </Box>

        <CardActionArea>
          <CardContent
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: {
                  xs: "rgba(0, 0, 0, 0.4)", // dark translucent bg for mobile
                  xl: "transparent", // no background for larger screens
                },
                borderRadius: 2,
                p: 2, // add padding only on small screens
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.4rem",
                    md: "1.5rem",
                  },
                  lineHeight: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "2.8rem",
                  },
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                }}
              >
                Smarter, Faster, and More Reliable
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                  },
                  lineHeight: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "3.6rem",
                  },
                  letterSpacing: "0%",
                }}
              >
                Streamline procurement and enhance your supply chain with 1IGS
              </Typography>
            </Box>

            <CardActions
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap:1,
alignItems:"start"
              }}
            >
              <CustomizedMenus
                icon={<ArrowRightIcon />}
                fontWeight="700"
                bgColor="rgba(243, 100, 52, 1)"
                caption="Explore Cost-Effective Sourcing Options"
              />
              <CustomizedMenus caption="Book a Meeting" icon={null} />
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
