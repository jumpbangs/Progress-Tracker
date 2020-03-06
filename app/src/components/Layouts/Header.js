import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth.Actions";
import Sidebar from "./Sidebar";

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: (data, history) => {
      dispatch(logoutUser(data, history));
    }
  };
};
class Header extends Component {
  onSignOut = event => {
    event.preventDefault();
    let tokenData = {
      token: localStorage.getItem("userToken")
    };

    this.props.logoutUser(tokenData, this.props.history);
  };

  static getDerivedStateFromProps(props) {
    if (props.errorMsg.auth.err) {
      console.log(props.errorMsg.auth.err);
    }

    if (props.errorMsg.auth.success) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("auth");
      props.history.push("/");
      props.errorMsg.auth.success = null;
    }
  }

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
              <button
                onClick={this.onSignOut}
                className="btn btn-outline-light sign-out"
              >
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

const mapStateToProps = state => {
  return {
    errorMsg: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
