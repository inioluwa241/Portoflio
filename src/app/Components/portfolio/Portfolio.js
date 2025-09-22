import Underline from "@/app/General/Underline";
import classes from "./Portfolio.module.css";
import PortfolioGrid from "./PortfolioGrid";
import FadeInSection from "@/app/General/FadeInSection";

const Porfolio = function () {
  return (
    <FadeInSection delay={0.2}>
      <section id="#projects" className={classes.portfolio}>
        <div className={classes["heading-div"]}>
          <h2>Featured Projects</h2>
          <Underline
            style={{
              margin: " 0",
              background: "linear-gradient(to right, #00d396, #4ba7fd)",
            }}
          />
          <p>Here are some projects</p>
        </div>
        <PortfolioGrid />
      </section>
    </FadeInSection>
  );
};

export default Porfolio;
