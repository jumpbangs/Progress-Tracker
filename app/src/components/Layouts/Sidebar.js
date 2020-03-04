import React, { Component } from "react";
import { Link } from "react-router-dom";

const sideBarLinks = ["/home", "/profile"];
const sideBarTitle = ["Dashboard", "Profile"];
const sidebarIcons = ["fa fa-home", "fa fa-user"];

class Sidebar extends Component {
  render() {
    return (
      // <div className="container-fluid">
      //   <div className="row">
      //     <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      //       <div className="sidebar-sticky">
      //         <ul className="nav flex-column navbar-items">
      //           <li className="nav-item nav-icon">
      //             <Link to="/home">
      //               <i className="fas fa-home" />
      //               DashBoard
      //             </Link>
      //           </li>
      //           <li className="nav-item nav-icon">
      //             <Link to="/profile">
      //               <i className="fas fa-user" />
      //               Profile
      //             </Link>
      //           </li>
      //           <li className="nav-item nav-icon">
      //             <a href="#">
      //               <i className="fas fa-tasks" />
      //               Tasks
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //   </div>
      // </div>

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
