import {
  faCode,
  faHandshake,
  faLightbulb,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import classes from "./ServiceList.module.css";
import ServiceItem from "./ServiceItem";

const ServiceList = function () {
  return (
    <div className={classes["service-list"]}>
      <ServiceItem
        icon={faCode}
        h3="Clean code"
        p=" Writing maintainable, scalable, and efficient code that stands the test of time."
      />
      <ServiceItem
        icon={faLightbulb}
        h3="Innovation"
        p=" Always exploring new technologies and creative solutions to complex problems."
      />
      <ServiceItem
        icon={faHandshake}
        h3="Collaboration"
        p="Working effectively with teams to deliver exceptional user experiences."
      />
      <ServiceItem
        icon={faMedal}
        h3="Dedication"
        p="Committed to continuous learning and staying current with industry trends."
      />
    </div>
  );
};

export default ServiceList;
