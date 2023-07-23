import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutimg from "public/websites.jpg";

export const metadata = {
  title: "About Us",
  description: "This is the about page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src={aboutimg} className={styles.img} />
      </div>

      <div className={styles.about}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Who Are We?</h1>
          <p className={styles.desc}>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

        <div className={styles.right}>
          <h1 className={styles.heading}>What We Do?</h1>
          <p className={styles.desc}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. <br /><br />
            - Fast & Secure at every extent.
            <br /><br />
            - SEO Friendly websites.
            <br /><br />
            - Multipage Screen Responsive.
          </p>
          <button>Reach Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
