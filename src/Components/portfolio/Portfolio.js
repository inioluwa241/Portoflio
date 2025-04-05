import classes from "./Portfolio.module.css";
import PortfolioGrid from "./PortfolioGrid";

const Porfolio = function () {
  return (
    <section className={classes.portfolio}>
      <h2>Selected Work</h2>
      <PortfolioGrid />
    </section>
  );
};

export default Porfolio;
