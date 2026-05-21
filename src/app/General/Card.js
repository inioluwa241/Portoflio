import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <section style={props.style} className={styles.card}>
      {props.children}
    </section>
  );
};

export default Card;
