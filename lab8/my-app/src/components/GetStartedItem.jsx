import "./GetStartedItem.scss";
function GetStartedItem({ icon: Icon, title, text }) {
  return (
    <div className="item">
      <Icon className="item__icon" role="img" aria-label={title} />
      <h2 className="item__title">{title}</h2>
      <p className="item__text">{text}</p>
    </div>
  );
}

export default GetStartedItem;
