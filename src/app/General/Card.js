const Card = (props) => {
  return (
    <section
      style={{
        ...props.style,
        padding: "20px",
        borderRadius: "15px",
        borderWidth: "0.1px",
        borderColor: "#9f9f9f",
        // borderStyle: "solid",
      }}
    >
      {props.children}
    </section>
  );
};

export default Card;
