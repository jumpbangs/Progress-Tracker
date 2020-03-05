import React, { Component } from "react";
import Header from "./Layouts/Header";

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-body">
          <h1>Home Page</h1>

          
        </div>
      </div>
    );
  }
}

export default HomeComponent;
