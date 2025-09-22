import FadeInSection from "@/app/General/FadeInSection";
import LetsConnect from "../LetsConnect/LetsConnect";
import classes from "./Contact.module.css";
import Underline from "@/app/General/Underline";

const Contact = function () {
  return (
    <FadeInSection delay={0.2}>
      <section id="#contact" className={classes.contact}>
        <div className={classes["heading-div"]}>
          <h1>Get In Touch</h1>
          <Underline
            style={{
              margin: "10px 0",
              background: "linear-gradient(to right, #c579ff, #f866bb)",
            }}
          />

          <p>
            I'm always interested in new opportunities and interesting projects.
            Let's discuss how we can work together!
          </p>
        </div>
        <div className={classes["card-div"]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "start",
              marginBottom: "16px",
            }}
          >
            <h3>Send me a message, as an </h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ cursor: "pointer" }}>Individual</span>
              <span style={{ cursor: "pointer" }}>Organisation</span>
            </div>
          </div>
          <form action="https://formspree.io/f/xrbggnor" method="POST">
            <div>
              <p>First Name</p>
              <input
                type="text"
                name="name"
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                name="name"
                placeholder="Your last name"
                required
              />
            </div>
            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                placeholder="youremail@example.com"
                required
              />
            </div>
            <div>
              <p>Subject</p>
              <input
                type="text"
                name="email"
                placeholder="Project discussion"
                required
              />
            </div>
            <div>
              <p>Message</p>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <LetsConnect />
        <div className={classes.secline}></div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
