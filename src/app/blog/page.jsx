import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import code1 from "public/coding1.jpg";
import Link from "next/link";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

export const metadata = {
  title: "Blog Page",
  description: "This is the blog page",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("no data found");
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
          <div className={styles.blogBox} key={item._id}>
            <div className={styles.imgBox}>
              <Image
                src={item.img}
                className={styles.blogImg}
                alt="blog image 1"
                width={600}
                height={400}
              />
            </div>

            <div className={styles.blogContent}>
              <Link href={`/blog/${item._id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p>{item.desc}</p>
              <Link href={`/blog/${item._id}`}>
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
