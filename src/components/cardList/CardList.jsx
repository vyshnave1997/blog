import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

// Dummy posts data
const postsData = [
  {
    _id: "1",
    title: "Exploring the Future of Tech",
    desc: "A look into the trends shaping the technology landscape...",
    img: "/images/tech-post.jpg",
    slug: "future-of-tech",
    category: "tech",
  },
  {
    _id: "2",
    title: "Top 10 Travel Destinations",
    desc: "Discover the most breathtaking travel spots for 2025...",
    img: "/images/travel-post.jpg",
    slug: "top-travel-2025",
    category: "travel",
  },
  {
    _id: "3",
    title: "Healthy Food Habits",
    desc: "Simple tips to build a healthy and balanced diet...",
    img: "/images/food-post.jpg",
    slug: "healthy-food-habits",
    category: "food",
  },
  {
    _id: "4",
    title: "Fitness Hacks for Busy People",
    desc: "Quick workouts and fitness tips to stay in shape...",
    img: "/images/fitness-post.jpg",
    slug: "fitness-hacks",
    category: "fitness",
  },
  {
    _id: "5",
    title: "The Evolution of Style",
    desc: "How fashion trends are changing with technology...",
    img: "/images/style-post.jpg",
    slug: "evolution-of-style",
    category: "style",
  },
  {
    _id: "6",
    title: "Music That Inspires",
    desc: "Exploring how music impacts motivation and creativity...",
    img: "/images/music-post.jpg",
    slug: "music-inspires",
    category: "music",
  },
];

const CardList = ({ page = 1, cat }) => {
  const POST_PER_PAGE = 2;

  // Filter by category if selected
  const filteredPosts = cat
    ? postsData.filter((post) => post.category === cat)
    : postsData;

  // Pagination logic
  const startIndex = (page - 1) * POST_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POST_PER_PAGE
  );

  const hasPrev = startIndex > 0;
  const hasNext = startIndex + POST_PER_PAGE < filteredPosts.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {paginatedPosts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
