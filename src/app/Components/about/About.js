import FadeInSection from "@/app/General/FadeInSection";
import classes from "./About.module.css";

const About = function () {
  return (
    <FadeInSection delay={0.2}>
      <section id={"#about"} className={classes.about}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/imgs/black-linen.png')",
            backgroundRepeat: "repeat",
            opacity: 0.4,
          }}
        ></div>
        <div className={classes["about-image-container"]}>
          <img
            src="/imgs/your-photo2.jpg"
            alt="Your Name"
            className={classes["about-image"]}
          />
        </div>
        <h2>About Me</h2>
        <div className={classes["sub-about"]}>
          <p
            style={{
              marginBottom: "20px",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.25px",
            }}
          >
            With years of expertise in web development, I specialize in creating
            highly functional, elegant, and scalable websites. I combine
            advanced development skills with refined design as well as AI tools
            to build impressive digital experiences. With over 5 years of
            experience in web development, I've had the privilege of working
            with startups. My journey began with a curiosity about how websites
            work, and it has evolved into a passion for creating seamless,
            performant applications, designing the future with dynamic,
            responsive and user focused solutions.
          </p>
          <p>
            I specialize in React, Node.js, and modern JavaScript frameworks
            amongst others, but I'm always eager to learn new technologies that
            can help me build better solutions. When I'm not coding, you'll find
            me exploring the latest in web technologies, or playing musical
            instruments.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default About;
