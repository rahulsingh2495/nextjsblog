import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.jsx";
import { notFound } from "next/navigation";

// console.log(items);

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.catTitle}>{params.category}</h1>
      </div>

      {data.map((item) => (
        <div className={styles.items} key={item.id}>
          <div className={styles.left}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>Read More</button>
          </div>
          <div className={styles.right}>
            <Image
              src={item.image}
              className={styles.images}
              alt="website development image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
