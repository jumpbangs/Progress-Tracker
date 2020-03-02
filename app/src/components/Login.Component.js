import React, { Component } from "react";

//Logo
import logo from "../assets/img/logo.png";

import etc from '../utils/etc'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../actions/auth.Actions";

const initialState = {
  username: "",
  password: "",
  userErr: " ",
  passErr: " ",
  authFailed: null
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data, history) => {
      dispatch(loginUser(data, history));
    }
  };
};

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userErr: " ",
      passErr: " ",
      authFailed: this.props.errorMsg
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    let errArray = this.props.errorMsg.auth;
    if(Object.keys(errArray).length > 0){
      alert(errArray[0].err.msg)
    }

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validator = () => {

    if (etc.isObjEmpty(this.state.username)) {
      alert("Username is empty");
      return false;
    } else if (etc.isObjEmpty(this.state.password)) {
      alert("Password is empty");
      return false;
    }
    return true;
  };

  onSubmit = event => {
    event.preventDefault();

    const isValid = this.validator();
    const details = {
      UserName: this.state.username,
      Password: this.state.password
    };

    console.log(isValid);
    if (isValid) {
      console.log('lol');
      this.props.loginUser(details, this.props.history);
      this.setState(initialState);
    }
  };

  render() { 
    return (
      <div className="default-bg login-block">
        <div className="container block__container">
          <div className="row">
            <div className="col-md-4 block__section">
              <h2>Hi</h2>
              <form onSubmit={this.onSubmit} className="login-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username..."
                    name="username"
                    onChange={this.onChange}
                    value={this.state.username}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password..."
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-danger form-control btn-login"
                  >
                    {""}
                    Login
                  </button>
                </div>
                <div className="row">
                  <Link className="col-md-7" to="/register">
                    Create a new account
                  </Link>
                  <Link className="col-md-5" to="/forgetpass">
                    Forget password
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-8 login-block-side">
              <div className="login-block-side__img-block">
                <img
                  src={logo}
                  alt="logo.png"
                  className="rounded-circle img-block"
                />
              </div>
              <div className="login-block-side__title-block">
                <h4>Welcome</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMsg: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
