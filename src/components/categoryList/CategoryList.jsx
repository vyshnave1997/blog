import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    _id: "1",
    slug: "style",
    title: "Style",
    img: "/style.png",
  },
  {
    _id: "2",
    slug: "travel",
    title: "Travel",
    img: "/travel.png",
  },
  {
    _id: "3",
    slug: "food",
    title: "Food",
    img: "/food.png",
  },
  {
    _id: "4",
    slug: "coding",
    title: "Tech",
    img: "/coding.png",
  },
  {
    _id: "5",
    slug: "culture",
    title: "Fitness",
    img: "/culture.png",
  },
  {
    _id: "6",
    slug: "fashion",
    title: "Music",
    img: "/fashion.png",
  },
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
