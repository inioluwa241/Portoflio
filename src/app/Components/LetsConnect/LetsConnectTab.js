const LetsConnectTab = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        padding: "12px",
        borderRadius: "10px",
        backgroundColor: "#080c14",
        boxShadow: "0 0 0 1px #21252c",
      }}
    >
      <img src={props.imgSrc} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          alignItems: "start",
          fontSize: "12px",
        }}
      >
        <p>{props.head}</p>
        <p>{props.det}</p>
      </div>
    </div>
  );
};

export default LetsConnectTab;
