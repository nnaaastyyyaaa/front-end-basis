import "./GoodsCard.css";

function GoodsCard({ image, title, price }) {
  return (
    <div className="good-card">
      <img
        src={process.env.PUBLIC_URL + "/flowers/" + image + ".png"}
        className="good-image"
      />
      <h2 className="good-title">{title}</h2>
      <p className="good-price">{"Ціна:" + price}</p>
    </div>
  );
}

export default GoodsCard;
