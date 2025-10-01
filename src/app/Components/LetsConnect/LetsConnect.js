import classes from "./LetsConnect.module.css";
import LetsConnectTab from "./LetsConnectTab";

const LetsConnect = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          margin: "32px 0",
        }}
      >
        <h2
          style={{
            fontSize: "25px",
            fontWeight: "500",
            color: "#7037eb",
          }}
        >
          Let's connect
        </h2>
        <p
          style={{
            textAlign: "left",
            fontSize: "14px",
            color: "white",
          }}
        >
          I'm currently available for freelance work and full-time
          opportunities. Whether you have a project in mind or just want to chat
          about technology, I'd love to hear from you.
        </p>
      </div>
      <div>
        <LetsConnectTab
          imgSrc="/icon/Icon-email.svg"
          head="Email"
          det="Inioluwafredrick09@gmail.com"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          margin: "32px 0",
          gap: "15px",
        }}
      >
        <p>Follow me</p>
        <div className={classes.imgDiv}>
          <img
            src="/icon/icon-github.svg"
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://github.com/inioluwa241")
            }
          />
          <img
            src="/icon/icon-linkedin.png"
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/inioluwa-ebi-fredrick/")
            }
          />
          <img
            src="/icon/icon-x.svg"
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://x.com/InioluwaFr64114?s=08")
            }
          />
          <img
            src="/icon/icon-medium.svg"
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://medium.com/@samf72302")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
