import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Layouts/Header";

let defaultImage = require("../assets/img/Blank-Employee.jpg");
export class ProfileComponent extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="basic-block__withNav profilePage__block">
          <div className="container">
            <h1>Profile Page</h1>
            <div className="card border-success">
              <img
                className="card-imge-top profileImage-card rounded-circle"
                src={defaultImage}
                alt="employee-image"
              />
              <div className="card-header pt-3 pb-3">
                <h3 className="card-title">Username</h3>
              </div>
              <div className="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name</li>
                  <li class="list-group-item">LastName</li>
                  <li class="list-group-item">Phone</li>
                  <li class="list-group-item">Address</li>
                </ul>
                <div className="card-body">
                  <a className="btn btn-outline-success">Save</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
