import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {authActions} from "../store/index";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const loggedin = useSelector((state) => state.auth.loggedin);
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Box component="div" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {loggedin ? <Button variant="header" onClick={handleSignout}>
            Sign out
          </Button> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
