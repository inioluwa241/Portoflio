const EachSkill = function (props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: "400",
            marginBottom: "4px",
            color: "#f2f3f3",
          }}
        >
          {props.skill}
        </p>
        <p style={{ color: "#99a19f" }}>{props.extent}</p>
      </div>

      <div
        style={{
          width: "100%",
          height: "4px",
          backgroundColor: "grey",
          borderRadius: "10px",
        }}
      >
        <div
          style={{ width: props.extent, height: "100%", ...props.style }}
        ></div>
      </div>
    </div>
  );
};

export default EachSkill;
