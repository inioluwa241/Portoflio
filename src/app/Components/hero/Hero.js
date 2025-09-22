"use client";
import classes from "./Hero.module.css";
import { useEffect, useState } from "react";
import * as heroBgChange from "./HeroBackgroundChange";

const Hero = function () {
  const [bgImage, setBgImage] =
    useState(`url("/imgs/nature.webp") no-repeat center
    center/cover`);

  useEffect(() => {
    console.log(bgImage);
    heroBgChange.startBackgroundRotation(setBgImage, heroBgChange);
  }, []);

  return (
    <div className={classes.hero} style={{ background: bgImage }}>
      <h1>{" <devynamic />"}</h1>
      <h2>
        Designing the future with dynamic, responsive and user focused solutions
      </h2>
      <a href="#contact" className={classes["cta-button"]}>
        Work with Me
      </a>
    </div>
  );
};

export default Hero;
