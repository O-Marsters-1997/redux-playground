import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// custom hook for allowing us to access a custom part of the state managed by the store
// useDispatch gives us a dispatch function that we can execute.
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const ButtonGroup = styled("div")(() => ({
  height: "fit-content",
  width: "fit-content",
  margin: "50px auto",

  " + .MuiTypography-root": {
    margin: "0 auto",
    width: "fit-content",
  },
}));

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  //   useSelector automatically sets up a subscription for the redux store for component, so component will be automatically updated.
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const toggle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <ButtonGroup>
        <Button onClick={increment} variant="outlined" sx={{ mr: "1.25em" }}>
          + 1
        </Button>
        <Button onClick={decrement} variant="outlined">
          - 1
        </Button>
        <Button
          onClick={increaseHandler}
          variant="outlined"
          sx={{ mr: "1.25em" }}
        >
          + 5
        </Button>
        <Button onClick={decrement} variant="outlined" sx= {{display:"block"}}>
          Toggle
        </Button>
      </ButtonGroup>
      {showCounter ? <Typography variant="h5">{counter}</Typography> : null}
    </>
  );
};
export default Counter;
