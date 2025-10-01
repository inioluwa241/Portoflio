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
      <img src={props.imgSrc} style={{ width: "30px", height: "30px" }} />
      <p>{props.skill}</p>
    </div>
  );
};

export default IconSkills;
