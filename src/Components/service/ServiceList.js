import classes from "./ServiceList.module.css";
import ServiceItem from "./ServiceItem";

const ServiceList = function () {
  return (
    <div className={classes["service-list"]}>
      <ServiceItem
        h3="Advanced Web Development"
        p=" I build highly scalable, secure websites using modern technologies
            like React, Node.js, and more."
      />
      <ServiceItem
        h3="Website Management"
        p=" Ensuring your websites remains perfect and best it can in
            functionality."
      />
      <ServiceItem
        h3="Website Modification"
        p=" Modifying already existing website by adding new features as
            required by users."
      />
      <ServiceItem
        h3="E-Commerce Solutions"
        p=" Custom online stores with intuitive design and robust back-end
            functionality."
      />
    </div>
  );
};

export default ServiceList;
