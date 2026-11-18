import "./HeroQuote.scss";

export default function HeroQuote({
  quote = "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.”",
  name = "Daniella Wood",
  role = "founder @ Colorlib",
}) {
  return (
    <figure className="hero-quote">
      <span className="hero-quote__backdrop" aria-hidden="true" />
      <img className="hero-quote__photo" src="/woman.png" alt="woman" />

      <div className="hero-quote__card">
        <p className="hero-quote__text">{quote}</p>
        <figcaption className="hero-quote__author">
          <strong className="hero-quote__name">{name}</strong>
          <span className="hero-quote__role">{role}</span>
        </figcaption>
      </div>
    </figure>
  );
}
