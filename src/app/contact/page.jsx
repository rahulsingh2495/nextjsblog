import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contact from "public/contact.png";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Have Any Query? Let's Connect</h1>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.imgContact}>
          <Image src={contact} className={styles.img} alt="contact image" />
        </div>
        <div className={styles.form}>
          <form>
            <input type="text" className={styles.input} placeholder="Enter Your Name" />
            <input type="number" className={styles.input} placeholder="Enter Your Mobile Number" />
            <input type="email" className={styles.input} placeholder="Enter Your Email" />
            <input type="text" className={styles.textarea} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
