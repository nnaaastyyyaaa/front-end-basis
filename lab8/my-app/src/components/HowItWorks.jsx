import "./HowItWorks.scss";
import HowItWorksStep from "./HowItWorksStep";
import Step1 from "../assets/icons/step1.svg?react";
import Step2 from "../assets/icons/step2.svg?react";
import Step3 from "../assets/icons/step3.svg?react";
import Arrow1 from "../assets/icons/arrow1.svg?react";
import Arrow2 from "../assets/icons/arrow2.svg?react";

function HowItWorks() {
  return (
    <div className="how-it-works">
      <p className="how-it-works__label">How it works</p>
      <h2 className="how-it-works__title">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia,
      </h2>
      <div className="how-it-works__steps">
        <HowItWorksStep
          icon={Step1}
          title={"1. Create an account"}
          text={
            "Connect your store, import your products, then send us your inventory."
          }
        />
        <Arrow1 className="how-it-works__arrow" aria-hidden="true" />
        <HowItWorksStep
          icon={Step2}
          title={"2. Create new orders"}
          text={
            "We store your inventory in any combination of our fulfillment centers."
          }
        />
        <Arrow2 className="how-it-works__arrow" aria-hidden="true" />
        <HowItWorksStep
          icon={Step3}
          title={"3. Ship and track"}
          text={
            "As soon as a customer places an order, we ship it from nearest fulfillment center."
          }
        />
      </div>
    </div>
  );
}

export default HowItWorks;
