import "./HowItWorksStep.scss";

function HowItWorksStep({ icon: Icon, title, text }) {
  return (
    <div className="step">
      <Icon className="step__icon" role="img" aria-label={title} />
      <h3 className="step__title">{title}</h3>
      <p className="step__text">{text}</p>
    </div>
  );
}

export default HowItWorksStep;
