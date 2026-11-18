import "./BlogCard.scss";

function BlogCard({ date, title, text }) {
  return (
    <div className="blog-card">
      <p className="blog-card__date">{date}</p>
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__text">{text}</p>
    </div>
  );
}

export default BlogCard;
