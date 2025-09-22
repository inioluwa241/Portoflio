import classes from "./PortfolioGrid.module.css";
import PortfolioItem from "./PortfolioItem";

const PortfolioGrid = function () {
  return (
    <div className={classes["portfolio-grid"]}>
      {/* <PortfolioItem
        src="./imgs/Facebook mockup.jpg"
        h3="Facebook Mini"
        p="A mini mobile facebook application (just for project sake)."
        href="https://facebook-demo-puce.vercel.app/"
        alt="Project 1"
        languages={["react.js", "next.js", "mongodb"]}
      /> */}

      <PortfolioItem
        src="./imgs/gamegrid.jpg"
        h3="Gamegrid"
        p="A web3 gaming project allowing users to create account, play games and earn their rewards. I worked on the project as a frontend developer with a team of other developers"
        href="https://facebook-demo-puce.vercel.app/"
        alt="Project 1"
        languages={["react.js", "vite", "typescript", "tailwindcss"]}
      />

      <PortfolioItem
        src="./imgs/Gift store markup.jpg"
        h3="Gift Station"
        p=" A self project aimed at e-commerce for doing any form of transaction
            involving gifts and gift-related items including delivery,
            packaging..."
        href="https://gift-store-flax.vercel.app/"
        alt="Project 2"
        languages={["html", "css", "javascrtpt"]}
      />

      <PortfolioItem
        src="./imgs/booksocial.jpg"
        h3="BookSocial"
        p="A web based application, allowing users to read, bookmark and do all sort with books online, this is a real world application underdeve;lopment, but would soon be running and fully functional and accessible from anyway in the world."
        href="https://facebook-demo-puce.vercel.app/"
        alt="Project 1"
        languages={["react.js", "next.js", "mongodb", "zustand"]}
      />

      <PortfolioItem
        src="./imgs/ivy-mail mockup.jpg"
        h3="Bulk email sender"
        p=" A bulk email and sms sending platform belonging to an international organisation I worked on the project as a frontend developer using modern javascript consepts."
        href="https://ivy-mail.onrender.com/"
        alt="Project 3"
        languages={["html", "css", "javascrtpt"]}
      />
    </div>
  );
};

export default PortfolioGrid;
