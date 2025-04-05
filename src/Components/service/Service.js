import classes from "./Service.module.css";
import ServiceList from "./ServiceList";

const Service = function () {
  return (
    <section className={classes.services}>
      <h2>My Expertise</h2>
      <ServiceList />
    </section>
  );
};

export default Service;
