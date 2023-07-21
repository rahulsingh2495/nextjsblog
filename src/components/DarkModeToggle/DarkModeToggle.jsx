"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext, ThemeProvider } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>Dark</div>
      <div className={styles.icon}>Light</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
