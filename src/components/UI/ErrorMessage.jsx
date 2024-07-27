import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

function ErrorMessage({ message }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      disableWindowBlurListener={true}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="outlined"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default ErrorMessage;
