import React from "react";
import classes from "../button/MyButton.module.css";
function MyButton({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}

export default MyButton;
