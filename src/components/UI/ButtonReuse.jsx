import React from "react";
import styles from "./ButtonReuse.module.css";
import { Button } from "@mui/material";

const ButtonReuse = ({ style, variant, className, sx, children, onClick, disabled }) => {
  return (
    <Button
      className={`${styles.btn} ${className}`}
      style={style}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{ ...sx }}
    >
      {children}
    </Button>
  );
};

export default ButtonReuse;
