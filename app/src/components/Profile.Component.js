import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Layouts/Header";
import Modal from "react-modal";

import { fetchUserDetails } from "../actions/user.Actions";

let defaultImage = require("../assets/img/Blank-Employee.jpg");

const mapDispatchToProps = dispatch => {
  return {
    fetchUserDetails: data => {
      dispatch(fetchUserDetails(data));
    }
  };
};

const initialState = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  showModal: false
};

export class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    //Modal Handler
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    //Modal Form Handler
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // User Token
    let userToken = localStorage.getItem("userToken");
    this.props.fetchUserDetails(userToken);
  }

  static getDerivedStateFromProps(props) {
    let results = props.errorMsg.user.success;
    if (results) {
      return {
        userDetails: results,
        otherDetails: results.userProfile
      };
    } else {
      return null;
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const updateDetails = {
      Name: this.state.name,
      Email: this.state.email,
      Address: this.state.address,
      LastName: this.state.lastname,
      Phone: this.state.phone
    };

    console.log(updateDetails);
    this.setState(initialState)
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  closeModal = e => {
    e.preventDefault();
    this.setState(initialState);
  };

  render() {
    // console.log(this.props.errorMsg);
    let { Name, UserName, Email } = { ...this.state.userDetails };
    let { LastName, Phone, Address } = { ...this.state.otherDetails };
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
                <h3 className="card-title">
                  {UserName ? UserName : "Update Username"}
                </h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {Name ? Name : "Update Name"}
                  </li>
                  <li className="list-group-item">
                    {Email ? Email : "Update Email"}
                  </li>
                  <li className="list-group-item">
                    {LastName ? LastName : "Update Lastname"}
                  </li>
                  <li className="list-group-item">
                    {Phone ? Phone : "Update Phone"}
                  </li>
                  <li className="list-group-item">
                    {Address ? Address : "Update Address"}
                  </li>
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-outline-success"
                    onClick={this.openModal}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.showModal}
          contentLabel="Modal"
          ariaHideApp={false}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                placeholder="Enter Name"
                onChange={this.onChange}
                value={this.state.name || ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter email"
                name="email"
                onChange={this.onChange}
                value={this.state.email || ""}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Enter Name"
                name="lastname"
                onChange={this.onChange}
                value={this.state.lastname || ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="inputPhone"
                placeholder="Enter Name"
                name="phone"
                onChange={this.onChange}
                value={this.state.phone || ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Name"
                name="address"
                onChange={this.onChange}
                value={this.state.address || ""}
              />
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <button
                  className="btn btn-success btn-md btn-block center-block"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="btn btn-danger btn-md btn-block center-block"
                  onClick={this.closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </Modal>
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
