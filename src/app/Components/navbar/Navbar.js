"use client";
import useNavStore from "@/app/General/useNavStore";
import classes from "./navbar.module.css";

const Navbar = function () {
  const { openNav, clickNavLink } = useNavStore();

  return (
    <nav className={classes.nav}>
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
