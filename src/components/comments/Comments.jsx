"use client";

import styles from "./comments.module.css";
import Image from "next/image";
import { useState } from "react";

const Comments = ({ postSlug }) => {
  // Dummy initial comments
  const [comments, setComments] = useState([
    {
      _id: "1",
      desc: "This is such an interesting post!",
      createdAt: "2024-01-01",
      user: {
        name: "John Doe",
        image: "/images/user1.jpg",
      },
    },
    {
      _id: "2",
      desc: "Great insights, thanks for sharing!",
      createdAt: "2024-01-02",
      user: {
        name: "Jane Smith",
        image: "/images/user2.jpg",
      },
    },
  ]);

  const [desc, setDesc] = useState("");

  // Add new comment locally
  const handleSubmit = () => {
    if (!desc.trim()) return;
    const newComment = {
      _id: Date.now().toString(),
      desc,
      createdAt: new Date().toISOString().split("T")[0], // e.g. 2025-08-18
      user: {
        name: "Guest User", // Default user name for now
        image: "/images/user1.jpg",
      },
    };
    setComments([newComment, ...comments]); // prepend
    setDesc("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {/* Always show text area */}
      <div className={styles.write}>
        <textarea
          placeholder="Write a comment..."
          className={styles.input}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Send
        </button>
      </div>

      <div className={styles.comments}>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first one!</p>
        ) : (
          comments.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt={item.user.name}
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>{item.createdAt}</span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
