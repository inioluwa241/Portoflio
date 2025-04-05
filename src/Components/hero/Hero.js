import classes from "./Hero.module.css";
import { useEffect, useState } from "react";
import * as heroBgChange from "./HeroBackgroundChange";

const Hero = function () {
  const [bgImage, setBgImage] =
    useState(`url("/images/nature.webp") no-repeat center
    center/cover`);

  useEffect(() => {
    heroBgChange.startBackgroundRotation(setBgImage, heroBgChange);
  }, []);

  return (
    <div className={classes.hero} style={{ background: bgImage }}>
      <h1>Hi, I'm Ebi-Fredrick Inioluwa, Expert Web Developer</h1>
      <a href="#contact" className={classes["cta-button"]}>
        Work with Me
      </a>
    </div>
  );
};

export default Hero;
