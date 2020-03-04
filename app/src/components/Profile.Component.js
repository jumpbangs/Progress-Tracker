import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./Layouts/Sidebar";
import Header from "./Layouts/Header";

export class ProfileComponent extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        Hello to Profile
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
