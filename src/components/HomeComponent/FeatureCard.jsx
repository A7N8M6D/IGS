import * as React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
} from "@mui/material";
import CustomizedMenus from "../NavbarComponent/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
export default function FeatureCard({ heading, paragraph, link }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
        color: "white",


        mx: "auto", // center on smaller screens if needed
        borderRadius: 2,
      }}
    >
      <CardActionArea>
        <CardContent sx={{ p: { xs: 1, sm: 2} }}>
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              lineHeight: { xs: "1.6rem", sm: "1.75rem" },
              letterSpacing: "0px",
            }}
          >
            {heading}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "0.95rem", sm: "1.125rem" },
              lineHeight: { xs: "1.5rem", sm: "1.75rem" },
              letterSpacing: "0px",
            }}
          >
            {paragraph}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            pt: 0,
            px: { xs: 2, sm: 3 },
            pb: { xs: 2, sm: 3 },
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <CustomizedMenus
            icon={<DoubleArrowIcon sx={{ color: '#C58F64', fontSize: 24 }} />}
            fontWeight="700"
            // bgColor="transparent"
            caption={<span style={{color:"rgba(240, 98, 48, 1)"}}>

          {   link}
            </span>
          }
          />
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
