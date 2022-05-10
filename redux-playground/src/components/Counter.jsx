import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// custom hook for allowing us to access a custom part of the state managed by the store
// useDispatch gives us a dispatch function that we can execute.
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { counterActions } from "../store/index";

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
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  //   useSelector automatically sets up a subscription for the redux store for component, so component will be automatically updated.
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrement = () => {
   dispatch(counterActions.decrement());;
  };

  const toggle = () => {
    dispatch(counterActions.toggle());;
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
        <Button onClick={toggle} variant="outlined" sx={{ display: "block" }}>
          Toggle
        </Button>
      </ButtonGroup>
      {showCounter ? <Typography variant="h5">{counter}</Typography> : null}
    </>
  );
};
export default Counter;

// Very Important to note that you should never mutate a stte but instead you should overide the state with a brand new state object.
// If you do this wrong can have unwanted side effects that can negatively effect behaviour.
