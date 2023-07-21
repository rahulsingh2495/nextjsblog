import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        Designed & Developed By WEBbuilders, Copyright 2023, All Right Reserved
      </div>
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt="footer image" />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="footer image" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="footer image" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="footer image" />
      </div>
    </div>
  );
};

export default Footer;
