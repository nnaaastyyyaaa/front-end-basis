import { useState } from "react";
import "./Testimonials.scss";
import Arrow from "../assets/icons/arrow.svg?react";

const testimonials = [
  {
    avatar: "avatar",
    quote:
      "“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    name: "Adam Aderson",
    role: "Head of business development @ Colorlib",
  },
  {
    avatar: "avatar",
    quote:
      "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”",
    name: "Daniella Wood",
    role: "Founder @ Colorlib",
  },
  {
    avatar: "avatar",
    quote:
      "“A small river named Duden flows by their place and supplies it with the necessary regelialia.”",
    name: "John Smith",
    role: "Designer @ Colorlib",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const item = testimonials[current];

  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <div className="testimonials">
      <button
        className="testimonials__arrow testimonials__arrow--left"
        onClick={prev}
        aria-label="Previous"
      >
        <Arrow />
      </button>

      <div className="testimonials__content">
        <img
          className="testimonials__avatar"
          src={"/img/" + item.avatar + ".png"}
          alt={item.name}
        />
        <p className="testimonials__quote">{item.quote}</p>
        <strong className="testimonials__name">{item.name}</strong>
        <span className="testimonials__role">{item.role}</span>
      </div>

      <button
        className="testimonials__arrow testimonials__arrow--right"
        onClick={next}
        aria-label="Next"
      >
        <Arrow />
      </button>

      <div className="testimonials__dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={
              "testimonials__dot" +
              (index === current ? " testimonials__dot--active" : "")
            }
            onClick={() => setCurrent(index)}
            aria-label={"Slide " + (index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
