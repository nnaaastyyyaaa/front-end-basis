import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Content from "./Content";
import Image from "./Image";
import Gallery from "./Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Image />
    <Gallery />
  </React.StrictMode>,
);
