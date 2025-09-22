import classes from "./PortfolioItem.module.css";

const PortfolioItem = function (props) {
  return (
    <div className={classes["portfolio-item"]}>
      <div className={classes.img_container}>
        <img src={props.src} alt={props.alt} />
      </div>
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
      <span>
        {/* <a href={props.href} target="_blank">
          Click to view the project
        </a> */}
      </span>
      <div
        style={{
          display: "flex",
          gap: "5px",
          marginTop: "5px",
          marginLeft: "20px",
        }}
      >
        {props.languages.map((each, i) => (
          <div
            style={{
              borderRadius: "20px",
              padding: "3px 12px",
              margin: "0 3px",
              background: "rgb(255, 102, 0)",
              textTransform: "capitalize",
            }}
            key={i}
          >
            {each}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PortfolioItem;
