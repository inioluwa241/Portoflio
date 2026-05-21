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
            src="/imgs/inioluwa.jpeg"
            alt="Your Name"
            className={classes["about-image"]}
          />
        </div>
        <h2>About Me</h2>
        <div className={classes["sub-about"]}>
          <p
            style={{
              // marginBottom: "20px",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.25px",
            }}
          >
            I'm a software developer who moved from pixels to platforms —
            starting with web (Next.js, React), then going deep into mobile with
            React Native/Expo, and now expanding into Flutter.{" "}
          </p>
          <p
            style={{
              // marginBottom: "20px",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.25px",
            }}
          >
            I don't just build UIs. I've wired up SQLite sync layers, written
            custom Kotlin native modules, debugged auth race conditions at 2AM,
            and shipped standalone Android APKs from scratch. I care about how
            things actually work under the hood.
          </p>
          <p
            style={{
              // marginBottom: "20px",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.25px",
            }}
          >
            Outside client work, I build my own products — Goal OS, a
            full-featured goal tracking app with local-first storage, Supabase
            sync, and native Android integrations; and a mobile accounting app
            aimed at underserved SMEs. I build these because I spot real gaps
            and want to fill them, not because I needed a portfolio piece.
          </p>
          <p
            style={{
              // marginBottom: "20px",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.25px",
            }}
          >
            I'm the kind of engineer who reads error logs before Stack Overflow,
            pushes back when something's overcomplicated, and ships things that
            are actually usable. If you need someone who can own a feature
            end-to-end — from database schema to polished UI — let's talk
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default About;
