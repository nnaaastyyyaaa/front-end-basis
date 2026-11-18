import "./Services.scss";
import Check from "../assets/icons/check.svg?react";
import { useModal } from "../context/Modal";

function Services() {
  const { openModal } = useModal();
  return (
    <div className="services-container">
      <div className="services">
        <div className="services__info">
          <p className="services__label">Services</p>
          <h2 className="services__title">
            Far far away, behind <br /> the word mountains
          </h2>
          <p className="services__text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live.
          </p>
          <ul className="services__list">
            <li className="services__item">
              <Check className="services__check" aria-hidden="true" />
              Behind the word Mountains.
            </li>
            <li className="services__item">
              <Check className="services__check" aria-hidden="true" />
              Far far away Mountains.
            </li>
            <li className="services__item">
              <Check className="services__check" aria-hidden="true" />
              Large language Ocean.
            </li>
          </ul>
          <button className="services__button" onClick={openModal}>
            Get Started
          </button>
        </div>
        <div className="services__image">
          <span className="services__dots" aria-hidden="true" />
          <img className="services__photo" src="/img/man.png" alt="man" />
        </div>
      </div>
    </div>
  );
}

export default Services;
