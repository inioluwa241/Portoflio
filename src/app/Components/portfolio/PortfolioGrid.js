import classes from "./PortfolioGrid.module.css";
import PortfolioItem from "./PortfolioItem";

const projects = [
  {
    src: "./imgs/gamegrid.jpg",
    title: "Gamegrid",
    textContent:
      "A web3 gaming project allowing users to create accounts, play games, and earn rewards. Built as a frontend developer within a team — focused on performance and smooth interactions.",
    link: "https://gamegrid-mvp.vercel.app/",
    alt: "Gamegrid project",
    badge: "Live ↗",
    languages: ["react.js", "vite", "typescript", "tailwindcss"],
    type: "web",
    category: ["gaming", "web3", "web"],
  },
  {
    src: "./imgs/Gift store markup.jpg",
    title: "Gift Station",
    textContent:
      "An e-commerce platform for gift transactions — covering browsing, delivery, packaging, and checkout. Self-initiated project with a focus on clean UX flows.",
    link: "https://gift-store-flax.vercel.app/",
    alt: "Gift Station project",
    badge: "Live ↗",
    languages: ["html", "css", "javascript"],
    type: "web",
    category: ["gift platform", "web"],
  },
  {
    src: "./imgs/booksocial.jpg",
    title: "BookSocial",
    textContent:
      "A web app for reading, bookmarking, and discovering books online. A real-world application currently under active development — global launch coming soon.",
    link: "",
    alt: "BookSocial project",
    badge: "In Development",
    languages: ["react.js", "next.js", "mongodb", "zustand"],
    type: "web",
    category: ["Social Platform", "Web"],
  },
  {
    src: "./imgs/ivy-mail mockup.jpg",
    title: "Ivy Mail — Bulk Sender",
    textContent:
      "A bulk email and SMS sending platform built for an international organisation. Worked as a frontend developer applying modern JavaScript patterns and clean UI architecture.",
    link: "https://ivy-mail.onrender.com/",
    alt: "Ivy Mail project",
    badge: "Live ↗",
    languages: ["html", "css", "javascript"],
    type: "web",
    category: ["sms", "web"],
  },
  {
    src: "./imgs/booksocial.jpg",
    title: "BookSocial",
    textContent:
      "A mobile app for reading, bookmarking, and discovering books online, and saving them offline. A real-world application currently under active development — global launch coming soon.",
    link: "",
    alt: "BookSocial project",
    badge: "In Development",
    languages: ["react native", "mongodb", "zustand"],
    type: "mobile",
    category: ["Social Platform", "mobile"],
  },
  {
    src: "/goalOs-logo.png",
    title: "Goal OS",
    textContent:
      "A mobile app, that brings your goals to you and immerses you in them — global launch coming soon.",
    link: "",
    alt: "Goal OS",
    badge: "active",
    languages: ["react native", "supabase", "sqlite"],
    type: "mobile",
    category: ["Goal platform", "mobile"],
  },
];

const PortfolioGrid = function (props) {
  const filteredProjects = projects.filter((project) => {
    if (props.filter === "all") return true;
    return project.type === props.filter;
  });

  return (
    <div className={classes["portfolio-grid"]}>
      {filteredProjects.map((eac, index) => {
        return (
          <PortfolioItem
            key={index}
            src={eac.src}
            h3={eac.title}
            p={eac.textContent}
            href={eac.link}
            alt={eac.alt}
            badge={eac.badge}
            languages={eac.languages}
            category={eac.category}
          />
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
