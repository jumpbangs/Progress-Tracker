import React, { Component } from "react";
import AxiosApi from "../utils/axios.config";


export class ForgetPassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };

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

    const emailDetails = {
        Email:this.state.email
    };
    console.log("send email");
    AxiosApi.post("user/resetpass", emailDetails)
      .then(response =>{
        this.props.history.push("/");
        alert(response.data.msg);
      })
      .catch(error =>{
        if(error){
          alert(error.response.data.err.msg);
        }
        this.setState({
          email:''
        })
      });
    
  };

  render() {
    return (
      <div className="default-bg forgetpass-block">
        <div className="container block__container">
          <div className="row">
            <div className="col block__section">
              <h2>Forget your password ??</h2>

              <form onSubmit={this.onSubmit} className="register-form">
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

                <div className="form-check">
                  <button className="btn btn-danger btn-block" type="submit">
                    Reset Password
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


export default ForgetPassComponent;
