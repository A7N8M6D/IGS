import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CustomizedMenus({
  caption,
  bgColor,
  fontWeight,
  height,
  width,
  icon,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Button
      id="demo-customized-button"
      aria-controls={open ? "demo-customized-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      variant="contained"
      disableElevation
      onClick={handleClick}
      endIcon={
        icon !== null
          ? icon || <ArrowDropDownIcon sx={{ marginLeft: "0px !important" }} />
          : null
      }
    sx={{
  height: height || "auto",
  width: width || "auto",
  padding: 0,
  marginRight: 0,
  backgroundColor: bgColor || "transparent",
  fontFamily: "Poppins, sans-serif",
  fontSize: { xs: "0.7rem", md: "1rem" }, // ✅ Responsive rem font size
  lineHeight: "26px",
  display:"flex",
  
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:{xs:"2px",md:"5px"},
  fontWeight: fontWeight || 600,
  "& .MuiButton-endIcon": {
    marginLeft: "4px", // ✅ controls gap between text and icon
  },
}}

    >
      {caption}
    </Button>
  );
}
