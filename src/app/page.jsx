import Image from "next/image";
import React from "react";
import HomeImg from "public/hero.png";
import styles from "./page.module.css";
import { db } from "@/utils/db";

// Rest of your server setup and routes

// Close the MongoDB connection when the application is terminated
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed.");
    process.exit(0);
  });
});


const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1>Welcome to the modern blog</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
        <button className={styles.btn}>Read More</button>
      </div>
      <div className={styles.imgContainer}>
        <Image src={HomeImg} alt="home page image" className={styles.img} />
      </div>
    </div>
  );
};

export default page;
