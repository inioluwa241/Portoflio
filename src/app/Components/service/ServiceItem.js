import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ServiceItem.module.css";

const ServiceItem = function (props) {
  return (
    <div className={classes["service-item"]}>
      <FontAwesomeIcon icon={props.icon} />
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  );
};

export default ServiceItem;
