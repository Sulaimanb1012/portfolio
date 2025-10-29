import { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/theme.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
          className="nav-mob-close"
        />
        <li>
          <a className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#about">
            <p onClick={() => setMenu("about")}>Over Mij</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#services">
            <p onClick={() => setMenu("services")}>Mijn Projecten</p>
          </a>
        </li>
        <li>
          <a className="anchor-link" href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>
        </li>
      </ul>
      <img src={underline} alt="Underline" />
    </nav>
  );
};

export default Navbar;

