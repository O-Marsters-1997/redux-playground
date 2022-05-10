import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MyComponent = styled("AppBar")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%",
}));

const Header = () => {
  return (
    <Box component="div" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MyComponent>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Button variant="header"> Sign out</Button>
          </MyComponent>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
