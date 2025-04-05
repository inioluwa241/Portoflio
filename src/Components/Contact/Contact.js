import classes from "./Contact.module.css";

const Contact = function () {
  return (
    <section className={classes.contact}>
      <h2>Get In Touch</h2>
      <form action="https://formspree.io/f/xrbggnor" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
