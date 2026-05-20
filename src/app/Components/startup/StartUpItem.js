import { CheckCircle2 } from "lucide-react";
import classes from "./StartUpItem.module.css";
import Image from "next/image";

const StartUpItem = function (props) {
  return (
    <div className={classes["startUp-item"]}>
      <div className={classes.img_container}>
        <Image
          src={props.src}
          alt="Hero background"
          fill
          style={{ objectFit: "contain" }}
        />
        {/* <img src={props.src} alt={props.name} /> */}
        <div className={classes.img_overlay} />
      </div>

      <div className={classes.content}>
        <div className={classes.header}>
          <h3 className={classes.name}>{props.name}</h3>
          <p>{props.tagline}</p>
          <span>{props.description}</span>
        </div>
        {props.achievements && (
          <div className={classes.achievements}>
            <h4>key achievements</h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {props.achievements?.map((achievement, index) => {
                return (
                  <li key={index} className={classes.listItem}>
                    <CheckCircle2 size={16} className={classes.successIcon} />
                    <p>{achievement}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={classes.techStack}>
          <h4>tech stacks</h4>
          <div style={{ padding: "7px 0" }}>
            {props.technologies.map((each, i) => (
              <span className={classes.tag} key={i}>
                {each}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpItem;
