import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

const LoginPage = () => {
  return (
    <Box>
      <Typography variant="h4">Login Page</Typography>
      <FormControl>
        <Input placeholder="email" id="my-input" />
      </FormControl>
      <FormControl>
        <Input placeholder="password" id="my-input" />
      </FormControl>
      <Button>Sign in</Button>
    </Box>
  );
};

export default LoginPage;
