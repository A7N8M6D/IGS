import { IconButton } from "@mui/material";
import React from "react";

const IconBtn = ({ icon, bgColor = 'transparent', iconColor = 'inherit' }) => {
  return (
    <IconButton
      size="small"
      aria-label="icon button"
      aria-haspopup="true"
      sx={{
      height:"24px",
      width:"24px",  
      borderRadius:"0px",
        color: iconColor,
       
      }}
    >
      {icon}
    </IconButton>
  );
};

export default IconBtn;
