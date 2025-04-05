import classes from "./PortfolioItem.module.css";

const PortfolioItem = function (props) {
  return (
    <div className={classes["portfolio-item"]}>
      <img src={props.src} alt={props.alt} />
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
      <span>
        <a href={props.href} target="_blank">
          Click to view the project
        </a>
      </span>
    </div>
  );
};
export default PortfolioItem;
