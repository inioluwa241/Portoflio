"use client";
import useNavStore from "@/app/General/useNavStore";
import classes from "./navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = function () {
  const { openNav, clickNavLink } = useNavStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${classes.nav} ${scrolled ? classes.scrolled : ""}`}>
      <div className={classes.mobile}>
        <img src="/icon/my logo.png" style={{ width: "50%", background: "" }} />
        <img
          src="/icon/icon-bar.svg"
          onClick={() => openNav()}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Desktop Nav */}
      <div className={classes.desktop}>
        <div style={{ display: "flex", width: "30%", alignItems: "center" }}>
          <img src="/icon/logo-shield.png" />
          <img src="/icon/logo-text.png" style={{ height: "50%" }} />
        </div>

        <ul className={classes.UlList}>
          <div
            onClick={() =>
              window.open("/docs/Inioluwa Ebi-fredrick_resume.pdf", "_blank")
            }
          >
            <p
              style={{
                color: "#7037eb",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              My Resume
            </p>
          </div>
          <li>
            <a href="#about" onClick={() => clickNavLink("#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => clickNavLink("#services")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => clickNavLink("#projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certificate" onClick={() => clickNavLink("#certificate")}>
              Certificate
            </a>
          </li>
          <li>
            <a href="#startups" onClick={() => clickNavLink("#startups")}>
              Start ups
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => clickNavLink("#contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
