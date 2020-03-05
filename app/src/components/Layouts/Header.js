import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

class Header extends Component {
  onSignOut = event => {
    event.preventDefault();
    localStorage.removeItem("userToken");
    localStorage.removeItem("auth");
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            Progress Tracker
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Sidebar />
            </ul>
            <div className="my-2 my-lg-0">
            <button onClick={this.onSignOut} className="btn btn-outline-light sign-out">
              <i className="fas fa-sign-out-alt" />
              Logout
            </button>
          </div>
          </div>

        </nav>

      </div>
    );
  }
}

export default Header;
