import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../public/Logo.png";
import bar from "../../public/Bars.png";
import CustomizedMenus from "../components/NavbarComponent/Menu";
import NavbarBottom from "../components/NavbarComponent/NavbarBottom";
import NavbarTop from "../components/NavbarComponent/NavbarTop";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  {
  }

  return (
    <div style={{ background: "rgba(0, 0, 0, 0.5)", zIndex: "10", width: "100%" }}>
      <NavbarTop />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="2xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: { xs: 70, md: 100 },
              flexDirection: "row",
            }}
            disableGutters
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                // display: { xs: "none", md: "flex" },

                width: { xs: "270px", md: "320px", xl: "447px" },
                mr: 2,
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 5 },
              }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", lg: "flex" },
                  justifyContent: "flex-end",
                  flexWrap: { xs: "wrap", md: "no-wrap" },
                  gap: { xs: 2, md: 5 },
                }}
              >
                <CustomizedMenus caption="Partner" />
                <CustomizedMenus caption="Company" />
                <CustomizedMenus caption="Managed Services" />
                <CustomizedMenus caption="Industries" />
                <CustomizedMenus caption="Career" />
              </Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  height: "34px",
                  width: "34px",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <NavbarBottom />
    </div>
  );
}
export default Navbar;
