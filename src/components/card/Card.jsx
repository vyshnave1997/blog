import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container} >
     
        <div className={styles.imageContainer}>
          <Image src="/travel.png" alt="" fill className={styles.image} />
        </div>
  
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
           11/22/2023
          </span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href="/">
          <h1>hello</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit dolorem facere expedita molestias ab recusandae veniam sed at magni ipsam, earum quibusdam a, necessitatibus quam quod explicabo! Incidunt, alias?</p>
        <div className={styles.desc} />
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;