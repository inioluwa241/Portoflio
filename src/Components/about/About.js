import classes from "./About.module.css";

const About = function () {
  return (
    <section className={classes.about}>
      <div className={classes["about-image-container"]}>
        <img
          src="/images/your-photo2.jpg"
          alt="Your Name"
          className={classes["about-image"]}
        />
      </div>
      <h2>About Me</h2>
      <p>
        With years of expertise in web development, I specialize in creating
        highly functional, elegant, and scalable websites. I combine advanced
        development skills with refined design as well as AI tools to build
        impressive digital experiences.
      </p>
    </section>
  );
};

export default About;
