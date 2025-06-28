import classes from "./Body.module.css";
import { Fragment } from "react";
import Header from "../header/Header";
import About from "../about/About";
import Service from "../service/Service";
import Porfolio from "../portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Space from "../Space/Space";
import Footer from "../Footer/Footer";

function Body() {
  return (
    <Fragment>
      <Header />
      <About />
      <Service />
      <Porfolio />
      <Contact />
      <Space />
      <Footer />
    </Fragment>
  );
}
export default Body;
