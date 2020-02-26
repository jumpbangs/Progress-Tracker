import React, { Component } from "react";

import AxiosApi from "../utils/axios.config";

const initialState = {
  name: "",
  username: "",
  password: "",
  email: ""
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

  onSubmit = event => {
    event.preventDefault();

    const registerDetails = {
      UserName: this.state.username,
      Name: this.state.name,
      Password: this.state.password,
      Email: this.state.email
    };

    AxiosApi.post("auth/register", registerDetails)
      .then(response => {
        this.props.history.push("/");
        alert(response.data.msg);
      })
      .catch(error => {
        if (error) {
          alert(error.response.data.err.msg);
        }
        this.setState(initialState);
      });
  };

  render() {
    return (
      <div className="default-bg register-block">
        <div className="container block__container">
          <div className="row">
            <div className="col block__section">
              <h2>Register</h2>
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

export default RegisterComponent;
