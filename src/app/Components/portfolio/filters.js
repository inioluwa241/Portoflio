import { useState } from "react";
import classes from "./Filters.module.css";

const filtArr = ["all", "web", "mobile"];

const Filter = function (props) {
  const [filter, setFilter] = useState("all");

  return (
    <div className={classes.filterContainer}>
      {filtArr.map((eac, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props.updateFilter(eac);
              setFilter(eac);
              console.log(filter);
            }}
            className={classes.button}
            style={{
              backgroundColor: filter === eac ? "purple" : "white",
              color: filter === eac ? "white" : "black",
            }} // variant={filter === 'all' ? 'default' : 'outline'}
          >
            {eac.toUpperCase()}
          </div>
        );
      })}
      {/* <button
        onClick={() => updateFilter("all")}
        className={classes.button} // variant={filter === 'all' ? 'default' : 'outline'}
      >
        All
      </button>
      <button
        onClick={() => updateFilter("web")}
        className={classes.button} // variant={filter === 'all' ? 'default' : 'outline'}

        // variant={filter === 'all' ? 'default' : 'outline'}
      >
        Web
      </button>
      <button
        onClick={() => updateFilter("mobile")}
        className={classes.button} // variant={filter === 'all' ? 'default' : 'outline'}

        // variant={filter === 'all' ? 'default' : 'outline'}
      >
        Mobile
      </button> */}
    </div>
  );
};

export default Filter;
