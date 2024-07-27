import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/authContext.jsx";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { theme as styledTheme } from "./styles/theme.js";
import { theme as muiTheme } from "./styles/muiTheme.js"; // Assuming you have a separate theme for MUI

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={styledTheme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
