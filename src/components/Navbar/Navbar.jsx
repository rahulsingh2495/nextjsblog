import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Darkmode from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>MODERN BLOG</h1>
      </div>
      <div className={styles.links}>
      <Darkmode />
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <Link href={"/blog"} className={styles.link}>
          Blog
        </Link>
        <Link href={"/contact"} className={styles.link}>
          Contact
        </Link>
        <Link href={"/dashboard"} className={styles.link}>
          Dashboard
        </Link>
        <Link href={"/portfolio"} className={styles.link}>
          Portfolio
        </Link>
        <button className={styles.logout}><Link href={"/contact"} className={styles.link}>
          Logout
        </Link></button>
      </div>
    </div>
  );
};

export default Navbar;
