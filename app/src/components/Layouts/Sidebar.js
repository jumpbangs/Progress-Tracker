import React, { Component } from "react";
import { Link } from "react-router-dom";

const sideBarLinks = ["/home", "/profile"];
const sideBarTitle = ["Dashboard", "Profile"];
const sidebarIcons = ["fa fa-home", "fa fa-user"];

class Sidebar extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Main Menu
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {sideBarLinks.map((link, index) => 
            <Link key={index} to={link} className="dropdown-item">
            <i className={sidebarIcons[index]} />
            {sideBarTitle[index]}
            </Link>
          )}
        </div>
      </li>
    );
  }
}

export default Sidebar;
