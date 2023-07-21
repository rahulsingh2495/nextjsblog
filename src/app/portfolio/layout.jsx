import React from "react";
import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.heading}>
      <h1>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
