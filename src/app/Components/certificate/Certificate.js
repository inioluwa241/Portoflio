import Underline from "@/app/General/Underline";
import classes from "./Certificate.module.css";
import FadeInSection from "@/app/General/FadeInSection";
import CertificateGrid from "./CertificateGrid";

const Certificate = function () {
  return (
    <FadeInSection delay={0.2}>
      <section id="#certificate" className={classes.certificate}>
        <div className={classes["heading-div"]}>
          {/* <span className={classes["section-label"]}>Selected work</span> */}
          <h2> Certifications & Credentials</h2>
          <Underline
            style={{
              margin: "0",
              background: "linear-gradient(to right, #C8FF57, #4ba7fd)",
            }}
          />
          <p>
            Professional certifications and credentials that validate my
            expertise.
          </p>
        </div>
        <CertificateGrid />
      </section>
    </FadeInSection>
  );
};

export default Certificate;
