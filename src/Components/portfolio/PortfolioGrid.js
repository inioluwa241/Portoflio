import classes from "./PortfolioGrid.module.css";
import PortfolioItem from "./PortfolioItem";

const PortfolioGrid = function () {
  return (
    <div className={classes["portfolio-grid"]}>
      <PortfolioItem
        src="./images/Facebook mockup.jpg"
        h3="Facebook Mini"
        p="A mini mobile facebook application (just for project sake)."
        href="https://facebook-demo-puce.vercel.app/"
        alt="Project 1"
      ></PortfolioItem>
      <PortfolioItem
        src="./images/Gift store markup.jpg"
        h3="Gift Station"
        p=" A self project aimed at e-commerce for doing any form of transaction
            involving gifts and gift-related items including delivery,
            packaging..."
        href="https://gift-store-flax.vercel.app/"
        alt="Project 2"
      ></PortfolioItem>
      <PortfolioItem
        src="./images/ivy-mail mockup.jpg"
        h3="Bulk email sender"
        p=" A bulk email and sms sending platform belonging to an international
            organisation <br />I worked on the project as a frontend developer"
        href="https://ivy-mail.onrender.com/"
        alt="Project 3"
      ></PortfolioItem>
    </div>
  );
};

export default PortfolioGrid;
