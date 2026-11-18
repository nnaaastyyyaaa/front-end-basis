import "./Stats.scss";
import StatsItem from "./StatsItem";

function Stats() {
  return (
    <div className="stats">
      <StatsItem
        value={"99.55%"}
        title={"Ratings 4.9 from user"}
        text={"Far far away, behind the word mountains."}
      />
      <StatsItem
        value={"98,000+"}
        title={"Happy Customers"}
        text={"Far far away, behind the word mountains."}
      />
      <StatsItem
        value={"99.99%"}
        title={"Server Up time"}
        text={"Far far away, behind the word mountains."}
      />
      <StatsItem
        value={"1M+"}
        title={"Love by our customers"}
        text={"Far far away, behind the word mountains."}
      />
    </div>
  );
}

export default Stats;
