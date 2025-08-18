import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// Dummy posts data
const postsData = [
  {
    slug: "future",
    title: "Exploring the Future of Tech",
    desc: "<p>A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... A look into the trends shaping the technology landscape... </p>",
    img: "/food.png",
    user: {
      name: "John Doe",
      image: "/travel.png",
    },
  },
  {
    slug: "top-travel-2025",
    title: "Top 10 Travel Destinations",
    desc: "<p>Discover the most breathtaking travel spots for 2025...</p>",
    img: "/images/travel-post.jpg",
    user: {
      name: "Emily Clark",
      image: "/images/user2.jpg",
    },
  },
  {
    slug: "healthy-food-habits",
    title: "Healthy Food Habits",
    desc: "<p>Simple tips to build a healthy and balanced diet...</p>",
    img: "/images/food-post.jpg",
    user: {
      name: "David Lee",
      image: "/images/user3.jpg",
    },
  },
];

const SinglePage = ({ params }) => {
  const { slug } = params;

  // Find post by slug
  const data = postsData.find((post) => post.slug === slug);

  if (!data) {
    return <div className={styles.container}>Post not found.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            {data.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt={data.user.name}
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt={data.title} fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
