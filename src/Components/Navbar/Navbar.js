import React, { useState } from "react";
import { BsFillHSquareFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { links } from "../../data";
import "./Navbar.css";

const Navbar = () => {
  const [menuNav, setMenuNav] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "header active " : "header"}>
      <div className="logo">
        <a href="#">
          <BsFillHSquareFill />
          ealth Center
        </a>
      </div>
      <nav
        style={menuNav ? { display: "block" } : { display: "none" }}
        className={navbar ? " nav_active " : "nav"}
      >
        <ul>
          {links.map(({ id, name }) => {
            return (
              <li>
                <a href={id}>{name}</a>
              </li>
            );
          })}
          <button>
            <a>Make an appointment</a>
          </button>
        </ul>
      </nav>
      <div
        className="menu"
        onClick={() => {
          setMenuNav(!menuNav);
        }}
      >
        {menuNav ? <ImCross /> : <FiMenu />}
      </div>
    </header>
  );
};

export default Navbar;
