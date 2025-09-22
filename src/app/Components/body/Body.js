"use client";
import { Fragment, useEffect, useLayoutEffect } from "react";

import useNavStore from "@/app/General/useNavStore";
import classes from "./Body.module.css";
import Header from "../header/Header";
import About from "../about/About";
import Service from "../service/Service";
import Porfolio from "../portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Space from "../Space/Space";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import BarPage from "../bar/barPage";

function Body() {
  const { isOpen, restoredScroll } = useNavStore();

  useEffect(() => {
    // restore last scroll position when Body is mounted
    window.scrollTo(0, restoredScroll);
  }, [restoredScroll]);

  if (isOpen) {
    return <BarPage />;
  }

  return (
    <Fragment>
      <Header />
      <div className={classes.sub}>
        <About />
        <Service />
      </div>
      <Skills />
      <Porfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
}
export default Body;
