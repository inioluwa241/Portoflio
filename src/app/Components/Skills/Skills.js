import FadeInSection from "@/app/General/FadeInSection";
import BackendSkills from "./BackendSkills";
import EachSkill from "./EachSkill";
import FrontendSkills from "./FrontendSkills";
import IconSkills from "./IconSkill";
import classes from "./Skills.module.css";
import Underline from "@/app/General/Underline";

const skillArray = [
  { imgSrc: "/skill-icons/Mobile/icon-javscript.svg", skill: "Javascript" },
  { imgSrc: "/skill-icons/Mobile/icon-typescript.svg", skill: "Typescript" },
  { imgSrc: "/skill-icons/Mobile/icon-react.svg", skill: "React" },
  { imgSrc: "/skill-icons/Mobile/icon-vite.svg", skill: "Vite" },
  { imgSrc: "/skill-icons/Mobile/icon-nextjs.svg", skill: "Next.js" },
  { imgSrc: "/skill-icons/Mobile/icon-nodejs.svg", skill: "Node.js" },
  { imgSrc: "/skill-icons/Mobile/icon-express.svg", skill: "Express.js" },
  { imgSrc: "/skill-icons/Mobile/icon-socket.svg", skill: "Socket.io" },
  { imgSrc: "/skill-icons/Mobile/icon-mongodb.svg", skill: "MongoDB" },
  { imgSrc: "/skill-icons/Mobile/icon-css.svg", skill: "CSS" },
  {
    imgSrc: "/skill-icons/Mobile/icon-tailwindcss.svg",
    skill: "Tailwindcss",
  },
  { imgSrc: "/skill-icons/Mobile/icon-git.svg", skill: "Git" },
];

const Skills = function () {
  return (
    <FadeInSection delay={0.2}>
      <section id="#skills" className={classes.section}>
        <div className={classes["heading-div"]}>
          <h1>Skills & Technologies</h1>
          <Underline
            style={{
              margin: "10px 0",
              background: "linear-gradient(to right, #c579ff, #f866bb)",
            }}
          />

          <p>
            Here are some of the technologies and tools i use to bring ideas to
            live
          </p>
        </div>
        <div className={classes["explicit-skill-div"]}>
          <FrontendSkills />
          <BackendSkills />
        </div>
        <div>
          <div className={classes["icon-skill-div"]}>
            {skillArray.map((each) => (
              <IconSkills imgSrc={each.imgSrc} skill={each.skill} />
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Skills;
