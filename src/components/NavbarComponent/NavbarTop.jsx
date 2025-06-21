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
import user from "../../../public/user.png";
import chat from "../../../public/chat.png";
import world from "../../../public/world.png";
import call from "../../../public/call.png";
import search from "../../../public/search.png";
const NavbarTop = () => {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        backgroundColor: "rgba(45, 83, 164, 1)", // ✅ your desired color
      }}
    >
      <Grid
        spacing={2}
        sx={{
          color: "#fff", // optional: white text for contrast

          height: 56,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 2, // e.g. 8px

                md: 3, // e.g. 24px
              },
            }}
          >
            <IconBtn icon={<img src={search} />} />
            <IconBtn icon={<img src={call} />} />
            <CustomizedMenus
              height="40px"
              width="1px"
              caption={<img src={world} />}
            />
          </Box>
        </Grid>

        <Grid
          size={6}
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 2, // e.g. 8px

                md: 3, // e.g. 24px
              },
            }}
          >
            <IconBtn
              icon={<img src={chat} />}
              iconColor="rgba(243, 100, 52, 1)"
            />

            <IconBtn
              icon={<img src={user} />}
              iconColor="rgba(243, 100, 52, 1)"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavbarTop;
