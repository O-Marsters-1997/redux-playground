import React from "react";
import { useDispatch } from "react-redux";
import {authActions} from "../store/index";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Login = () => {
  const dispatch = useDispatch();

  const handleSignin = () => {
    dispatch(authActions.login());
  };

  return (
    <form>
      <FormControl>
        <Input id="email-input" placeholder="email" />
      </FormControl>
      <FormControl>
        <Input id="password-input" placeholder="passoword" />
      </FormControl>
      <Button onClick={handleSignin}>Log in</Button>
    </form>
  );
};

export default Login;
