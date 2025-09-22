const IconSkills = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img src={props.imgSrc} style={{ width: "50px", height: "50px" }} />
      <p>{props.skill}</p>
    </div>
  );
};

export default IconSkills;
