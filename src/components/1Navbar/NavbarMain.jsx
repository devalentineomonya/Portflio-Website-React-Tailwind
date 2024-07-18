import React from "react";
import navbarItems from "../../assets/data/NavbarItems";
import "./navbar.css"
const NavbarMain = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <ul className="navbar-items-container">
          {navbarItems?.map((item, i) => (
            <li  key={`${i}-${item.name}`} className="navbar-item">
              <span className="navitem-icon">{item.icon}</span>
              <span className="navitem-name">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarMain;
