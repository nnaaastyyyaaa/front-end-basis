import "./Blog.scss";
import BlogCard from "./BlogCard";

const posts = [
  {
    date: "May 12th, 2020",
    title: "Far far away, behind the word mountains",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    date: "May 12th, 2020",
    title: "Far far away, behind the word mountains",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    date: "May 12th, 2020",
    title: "Far far away, behind the word mountains",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    date: "May 12th, 2020",
    title: "Far far away, behind the word mountains",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    date: "May 12th, 2020",
    title: "Far far away, behind the word mountains",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog">
        <p className="blog__label">Blog</p>
        <h2 className="blog__title">Latest Blog Posts</h2>
        <div className="blog__cards">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              date={post.date}
              title={post.title}
              text={post.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
