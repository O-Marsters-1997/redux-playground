import React from "react";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Typography
      variant="h5"
      sx={{
        margin: "2.5em auto 0 auto",
        width: "fit-content",
        fontWeight: "bold",
      }}
    >
      Counter App
    </Typography>
  );
};

export default Header;
