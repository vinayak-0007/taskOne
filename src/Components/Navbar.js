import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Membership", path: "/membership" },
    { name: "Apply", path: "/apply" },
  ];
  return (
    <div className="navbarMainContainer">
      <div className="navbarWrapper">
        <div className="leftNavbarContainer">
          {/* <img src={ } alt="" /> */}
          LOGO
        </div>
        <div className="rightNavbarContainer">
          <ul>
            {links.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.path}>{element.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
