import React, { Component } from "react";

class NotFoundComponent extends Component {
  render() {
    return (
      <div className="default-bg basic-block">
        <div className="container block__container">
          <div className="row">
            <div className="col block__section">
              <h1>404 Not Found</h1>
              <p>Oops the following page could not be found, here is a redirct to <a href='/'>home</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundComponent;
