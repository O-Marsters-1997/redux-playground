import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import theme from './utils/theme'
import { ThemeProvider, CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Whatever you wrap with the provider will have access to the redux
  // This is what you assign the store to be.
  // Any child of the provider can now tap into the store and essentially use all of redux.
  <Provider store={store}>
    <ThemeProvider theme = {theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Provider>
);
