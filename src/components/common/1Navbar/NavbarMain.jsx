import React from "react";
import navbarItems from "../../../assets/data/NavbarItems";
import "./navbar.css";
import { BiMoon } from "react-icons/bi";

const NavbarMain = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <ul className="navbar-items-container">
          {navbarItems?.map((item, i) => (
            <li key={`${i}-${item.name}`} className="navbar-item">
              <span className="navitem-icon">{item.icon}</span>
              <span className="navitem-name">{item.name}</span>
            </li>
          ))}
          <li className="navbar-item">
            <span className="navitem-icon">
              <BiMoon size={20} />
            </span>
            <span className="navitem-name">Dark</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarMain;
