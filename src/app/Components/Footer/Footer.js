import FadeInSection from "@/app/General/FadeInSection";
import classes from "./Footer.module.css";
import ShinyText from "@/app/animations/ShinyText";

const Footer = function () {
  return (
    <FadeInSection delay={0.2}>
      <footer className={classes.footer}>
        <p>&copy; Inioluwa Ebi-Fredrick. Built with ❤️ using React & Nextjs</p>
        {/* <ul>
        <li>
          <a href="https://github.com/inioluwa241">GitHub</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="https://x.com/InioluwaFr64114?s=08">Twitter</a>
        </li>
      </ul> */}
      </footer>
      {/* <ShinyText>your mouth</ShinyText> */}
    </FadeInSection>
  );
};

export default Footer;
