import FadeInSection from "@/app/General/FadeInSection";
import classes from "./Service.module.css";
import ServiceList from "./ServiceList";

const Service = function () {
  return (
    <FadeInSection delay={0.2}>
      <section className={classes.services}>
        <ServiceList />
      </section>
    </FadeInSection>
  );
};

export default Service;
