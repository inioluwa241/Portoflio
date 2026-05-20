import classes from "./PortfolioItem.module.css";

const PortfolioItem = function (props) {
  return (
    <div className={classes["portfolio-item"]}>
      <div className={classes.img_container}>
        <img src={props.src} alt={props.alt} />
        <div className={classes.img_overlay} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2%",
          right: "2%",
          display: "flex",
          gap: "5px",
        }}
      >
        {props.category.map((eac, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "purple",
                padding: "4px 10px",
                borderRadius: "5px",
                fontSize: "12px",
                textTransform: "capitalize",
              }}
            >
              {eac}
            </div>
          );
        })}
      </div>

      <div className={classes.content}>
        <div className={classes.header}>
          <h3>{props.h3}</h3>
          <span className={classes.badge}>
            {props.badge || "In Development"}
          </span>
        </div>
        <p>{props.p}</p>
        <div className={classes.footer}>
          <div className={classes.languages}>
            {props.languages.map((each, i) => (
              <span className={classes.tag} key={i}>
                {each}
              </span>
            ))}
          </div>
          {props.href && (
            <a
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              View ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
