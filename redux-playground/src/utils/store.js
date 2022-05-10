import {configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import counterReducer from "../reducers/counterReducer";

 const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store
