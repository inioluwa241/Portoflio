import React, { Fragment } from "react";
import classes from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";

const Header = function () {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
};

export default Header;
