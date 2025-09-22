"use client";
import useNavStore from "@/app/General/useNavStore";

const BarPage = () => {
  const { closeNav, clickNavLink } = useNavStore();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/Inioluwa Ebi-fredrick_resume.pdf";
    link.download = "Inioluwa Ebi-fredrick_resume.pdf";
    link.click();
  };

  return (
    <section style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #2c2c2c",
        }}
      >
        <img src="/icon/small-logo.svg" />
        <img
          src="/icon/Icon-cancel.svg"
          onClick={() => closeNav()}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: "20px 16px",
            borderBottom: "1px solid #2c2c2c",
            color: "#99A1AF",
          }}
        >
          <li>
            <a
              href="#about"
              style={{ color: "#99A1AF" }}
              onClick={() => clickNavLink("#about")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              style={{ color: "#99A1AF" }}
              onClick={() => clickNavLink("#services")}
            >
              Skills & Technologies
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              style={{ color: "#99A1AF" }}
              onClick={() => clickNavLink("#projects")}
            >
              Fetaured Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ color: "#99A1AF" }}
              onClick={() => clickNavLink("#contact")}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          padding: "16px 8px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "60%",
          justifySelf: "center",
        }}
      >
        <p style={{ textAlign: "center" }}>My resume</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              padding: "8px",
              borderRadius: "10px",
              backgroundColor: "#8b5fbf",
              width: "120px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("/docs/Inioluwa Ebi-fredrick_resume.pdf", "_blank")
            }
          >
            Check
          </div>
          <div
            style={{
              padding: "8px",
              borderRadius: "10px",
              backgroundColor: "#8b5fbf",
              width: "120px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={handleDownload}
          >
            Download
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarPage;
