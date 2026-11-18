import "./GetStarted.scss";
import GetStartedItem from "./GetStartedItem";
import HeroQuote from "./HeroQuote";
import Icon1 from "../assets/icons/icon1.svg?react";
import Icon2 from "../assets/icons/icon2.svg?react";
import { useModal } from "../context/Modal";

function GetStarted() {
  const { openModal } = useModal();
  return (
    <div className="get-started">
      <div className="get-started__info">
        <h1 className="get-started__title">
          Create, Code, <br /> and Pubished.
        </h1>
        <p className="get-started__text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <button className="get-started__button" onClick={openModal}>
          Get started
        </button>
        <div className="get-started__items">
          <GetStartedItem
            icon={Icon1}
            title={"High quality"}
            text={
              "Far far away, behind the word mountains, far from the countries"
            }
          />
          <GetStartedItem
            icon={Icon2}
            title={"High quality"}
            text={
              "Far far away, behind the word mountains, far from the countries"
            }
          />
        </div>
      </div>
      <HeroQuote />
    </div>
  );
}

export default GetStarted;
