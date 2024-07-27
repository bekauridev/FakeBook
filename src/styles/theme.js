// styles/theme.js
export const theme = {
  colors: {
    primary: "#var(--color-secondary)",
    secondary: "var(--color-secondary)",
    text: "var(--txt-color)",
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  fontWeight: {
    // bold
    b: "var(--fw-b)",
    // light bold
    lb: "var(--fw-lb)",
    // light
    l: "var(--fw-l)",
  },
};
