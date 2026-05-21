import Underline from "@/app/General/Underline";
import classes from "./StartUp.module.css";
// import PortfolioGrid from "./PortfolioGrid";
import FadeInSection from "@/app/General/FadeInSection";
import { useState } from "react";
import StartUpList from "./StartUpList";

const StartUp = function () {
  const [filter, setFilter] = useState("all");

  return (
    <FadeInSection delay={0.2}>
      <section id="#startups" className={classes.startUp}>
        <div className={classes["heading-div"]}>
          {/* <span className={classes["section-label"]}>Selected work</span> */}
          <h2> Tech Startup Ventures</h2>
          <Underline
            style={{
              margin: "0",
              background: "linear-gradient(to right, #C8FF57, #4ba7fd)",
            }}
          />
          <p> Entrepreneurial projects and ventures I&apos;m building.</p>
        </div>
        <StartUpList />
        {/* <PortfolioGrid filter={filter} /> */}
      </section>
    </FadeInSection>
  );
};

export default StartUp;
