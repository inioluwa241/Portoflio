import FadeInSection from "@/app/General/FadeInSection";
import BackendSkills from "./BackendSkills";
import EachSkill from "./EachSkill";
import FrontendSkills from "./FrontendSkills";
import IconSkills from "./IconSkill";
import classes from "./Skills.module.css";
import Underline from "@/app/General/Underline";

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
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-javscript.svg"
              skill="Javascript"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-typescript.svg"
              skill="Typescript"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-react.svg"
              skill="React"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-vite.svg"
              skill="Vite"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-nextjs.svg"
              skill="Next.js"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-nodejs.svg"
              skill="Node.js"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-express.svg"
              skill="Express.js"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-socket.svg"
              skill="Socket.io"
            />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-mongodb.svg"
              skill="MongoDB"
            />
            <IconSkills imgSrc="/skill-icons/Mobile/icon-css.svg" skill="CSS" />
            <IconSkills
              imgSrc="/skill-icons/Mobile/icon-tailwindcss.svg"
              skill="Tailwindcss"
            />
            <IconSkills imgSrc="/skill-icons/Mobile/icon-git.svg" skill="Git" />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Skills;
