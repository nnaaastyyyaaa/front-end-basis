import "./StatsItem.scss";

function StatsItem({ value, title, text }) {
  return (
    <div className="stats-item">
      <h2 className="stats-item__value">{value}</h2>
      <h3 className="stats-item__title">{title}</h3>
      <p className="stats-item__text">{text}</p>
    </div>
  );
}

export default StatsItem;
