import React, { Component } from "react";

import { connect } from "react-redux";
import { registerUser } from "../actions/auth.Actions";

const initialState = {
  name: "",
  username: "",
  password: "",
  email: "",
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (data, history) => {
      dispatch(registerUser(data, history));
    }
  };
};

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  static getDerivedStateFromProps(props){

    if(props.errorMsg.auth.err){
      alert(props.errorMsg.auth.err);
      props.errorMsg.auth.err = null;
    }

    if (props.errorMsg.auth.success){
      alert(props.errorMsg.auth.success);
      props.history.push('/');
    }

    return null;
  }

  onSubmit = event => {
    event.preventDefault();

    const registerDetails = {
      UserName: this.state.username,
      Name: this.state.name,
      Password: this.state.password,
      Email: this.state.email
    };

    this.props.registerUser(registerDetails, this.props.history);
    
    this.setState(initialState);
  };


  render() {


    return (
      <div className="default-bg basic-block">
        <div className="container block__container">
          <div className="row">
            <div className="col block__section">
              <h1>Register</h1>
              <p>Fill in your details to register</p>

              <form onSubmit={this.onSubmit} className="register-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.onChange}
                    value={this.state.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={this.onChange}
                    value={this.state.username}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    required
                  />
                </div>

                <div className="form-check">
                  <button className="btn btn-danger btn-block" type="submit">
                    Register
                  </button>
                </div>
              </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
