import React from "react";
import { Grid, Box, Tabs, Tab, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import IconBtn from "../../common/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import ChatIcon from "@mui/icons-material/Chat";
import CustomizedMenus from "./Menu";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import NavbarTop from "./NavbarTop";
const NavbarBottom = () => {
  return (
    <>
      <Container
        maxWidth="2xl"
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Grid
          spacing={2}
          sx={{
            color: "#fff", // optional: white text for contrast

            height: 56,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            size={6}
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
            gap={2}
          >
            <CustomizedMenus
              caption={
                <span>
                  <span style={{ color: "rgba(243, 100, 52, 1)" }}>1IGS </span>
                  <span style={{ color: "rgba(80, 107, 164, 1)" }}>
                    STRATEGY
                  </span>
                </span>
              }
            />
            <CustomizedMenus
              caption={
                <span>
                  <span style={{ color: "rgba(243, 100, 52, 1)" }}>1IGS </span>
                  <span style={{ color: "rgba(80, 107, 164, 1)" }}>
                    iPROCURE
                  </span>
                </span>
              }
            />
            <CustomizedMenus
              caption={
                <span>
                  <span style={{ color: "rgba(243, 100, 52, 1)" }}>1IGS </span>
                  <span style={{ color: "rgba(80, 107, 164, 1)" }}>
                    Managed Services
                  </span>
                </span>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NavbarBottom;
