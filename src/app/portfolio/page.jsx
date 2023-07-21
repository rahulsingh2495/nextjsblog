import React from "react";
import styles from "./page.module.css";
import p1 from "public/portfolio1.jpg";
import p2 from "public/portfolio2.jpg";
import p3 from "public/portfolio3.jpg";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.works}>
        <div className={styles.heading2}>
          <h4>Choose a Gallery</h4>
        </div>

        <div className={styles.grid}>
          <div className={styles.imgContainer}>
            <Link href={"/portfolio/website"}>
              <Image src={p1} className={styles.img} alt="portfolio one" />
              <h3 className={styles.pheading1}>Website Development</h3>
            </Link>
          </div>

          <div className={styles.imgContainer}>
            <Link href={"/portfolio/android"}>
              <Image src={p2} className={styles.img} alt="portfolio one" />
              <h3 className={styles.pheading1}>Android Development</h3>
            </Link>
          </div>

          <div className={styles.imgContainer}>
            <Link href={"/portfolio/graphic"}>
              <Image src={p3} className={styles.img} alt="portfolio one" />
              <h3 className={styles.pheading1}>
                Graphic Design <br />& UI/UX
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
