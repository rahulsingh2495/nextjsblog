import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import blogimage from "public/android.jpg";
import person from "public/person.jpg";
import {notFound} from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.blogContent}>
          <h2>{data.title}</h2>
          <p className={styles.blogPara}>{data.body}</p>
          <div className={styles.bloggerInfo}>
            <Image
              src={person}
              className={styles.bloggerImage}
              alt="blogger image"
            />
            <h4 className={styles.bloggerName}>Romeo Romeo</h4>
          </div>
        </div>
        <div className={styles.blogImage}>
          <Image src={blogimage} alt="blog image" />
        </div>
      </div>

      <div className={styles.box2}>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
