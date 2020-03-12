import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Layouts/Header";

import { fetchUserDetails } from "../actions/user.Actions";

let defaultImage = require("../assets/img/Blank-Employee.jpg");

const mapDispatchToProps = dispatch => {
  return {
    fetchUserDetails: data => {
      dispatch(fetchUserDetails(data));
    }
  };
};

export class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let userToken = localStorage.getItem("userToken");
    this.props.fetchUserDetails(userToken);
  }


  static getDerivedStateFromProps(props){
    let results = props.errorMsg.user.success;
    if (results) {
      return {
        userDetails : results,
        otherDetails : results.userProfile,
      }
    }

  }


  render() {
    
    let { Name, UserName, Email } = {...this.state.userDetails};
    let { LastName, Phone, Address } = {...this.state.otherDetails};
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
                <h3 className="card-title">{UserName}</h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{Name}</li>
                  <li className="list-group-item">{Email}</li>
                  <li className="list-group-item">{LastName}</li>
                  <li className="list-group-item">{Phone}</li>
                  <li className="list-group-item">{Address}</li>
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

const mapStateToProps = state => {
  return {
    errorMsg: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
