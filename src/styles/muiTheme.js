// styles/muiTheme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.4em 0.8em",
          borderRadius: "4px",
          fontWeight: "500",
          textTransform: "none",
          fontSize: "0.9rem",
          cursor: "pointer",
          transitionDuration: "var( --transition-dur)",
          transitionProperty: "background-color , color",
          color: "var( --txt-color)",
          "&:hover": {
            backgroundColor: "#007bff",
          },
          "&:disabled": {
            backgroundColor: "#d3d3d3",
            cursor: "not-allowed",
          },
        },
        contained: {
          backgroundColor: "#007bff",
          color: "white",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        },
        Primary: {
          backgroundColor: "var(--color-secondary)",
          color: "var( --txt-color)",

          "&:hover": {
            backgroundColor: "var(--color-secondary-dark)",
          },
        },
        secondary: {
          color: "var(--color-secondary-light)",
          fontWeight: "var(--fw-b)",
          "&:hover": {
            color: "var(--color-secondary-dark)",
            backgroundColor: "transparent",
          },
        },
        danger: {
          backgroundColor: "#d50000", // A700
          color: "#ffebee", //50
          "&:hover": {
            backgroundColor: "#c20201",
          },
        },
        success: {
          backgroundColor: "#00c853", // A700
          color: "#e8f5e9", //50
          "&:hover": {
            backgroundColor: "#00e676", // A400
          },
        },
      },
    },
  },
});
