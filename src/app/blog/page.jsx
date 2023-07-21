import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import code1 from "public/coding1.jpg";
import Link from "next/link";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return PageNotFoundError();
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.blogHeading}>All Blogs</h1>
      <div className={styles.blogs}>
        {data.map((item) => (
          <div className={styles.blogBox} key={item.id}>
            <div className={styles.imgBox}>
              <Image
                src={code1}
                className={styles.blogImg}
                alt="blog image 1"
              />
            </div>

            <div className={styles.blogContent}>
              <Link href={"/blog/Website-Development"}>
                <h1>{item.title}</h1>
              </Link>
              <p>{item.body}</p>
              <Link href={"/blog/Website-Development"}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
