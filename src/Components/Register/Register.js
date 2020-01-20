import React, {Component} from "react";

class Register extends Component{

    render() {
        return(
            <div className='register-block'>

                <div className='container block__container'>

                    <div className='row'>
                        <div className='col block__section'>
                            <h2>Register</h2>

                            <form action="" className="register-form">
                                <div className="form-group"><input type="text"/></div>
                                <div className="form-group"><input type="text"/></div>
                                <div className="form-group"><input type="text"/></div>
                                <div className="form-group"><input type="text"/></div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Register;