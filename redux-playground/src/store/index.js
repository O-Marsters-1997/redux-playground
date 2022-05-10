import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// below has to have a name
const counterSlice = createSlice({
  name: "counter",
  initialState,
  //   if you decalre a property of an object in modern js with the same name as a variable then it will automatically become the value of that previously defined variable.
  reducers: {
    increment(state) {
      // Allowed to mutate state here, we still must not to manipulate the state but we can't accidentally manipulate the existing state
      // toolkit uses a package that detects code like this and clones this state and recreates it, keeps all state not editing and changes the code we are.
      state.counter++;
      //   much easier because we don't have to create a copy manually
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
        // console.log("jdbfkd")
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
