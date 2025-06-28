import classes from "./ServiceItem.module.css";

const ServiceItem = function (props) {
  return (
    <div className={classes["service-item"]}>
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  );
};

export default ServiceItem;
