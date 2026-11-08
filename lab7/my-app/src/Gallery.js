import GoodsCard from "./GoodsCard";
import "./Gallery.css";
function Gallery() {
  return (
    <div className="gallery-container">
      <GoodsCard image={"daisies"} title={"Ромашки"} price={290} />{" "}
      <GoodsCard image={"hydrangea"} title={"Блакитна гортензія"} price={720} />
      <GoodsCard image={"lilies"} title={"Білі лілії"} price={640} />{" "}
      <GoodsCard image={"orchids"} title={"Орхідея"} price={950} />
      <GoodsCard image={"peonies"} title={"Рожеві півонії"} price={1100} />{" "}
      <GoodsCard image={"roses"} title={"Червоні троянди"} price={720} />
      <GoodsCard image={"sunflowers"} title={"Соняшники"} price={290} />{" "}
      <GoodsCard image={"tulips"} title={"Тюльпани"} price={720} />
    </div>
  );
}

export default Gallery;
