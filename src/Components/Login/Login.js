import React, {Component} from 'react';

import logo from '../../assets/img/logo.png';

class Login extends Component {
    render() {
        return (
            <div className='login-block'>

                <div className='container block__container'>
                    <div className='row'>

                        <div className='col-md-4 block__section'>
                            <h2>Login</h2>
                            <form action='POST' className='login-form'>
                                <div className='form-group'>
                                    <input className='form-control' type='text' placeholder='Username...'/>
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' type='password' placeholder='Password...'/>
                                </div>
                                <div className='form-check'>
                                    <button type='submit' className='btn btn-danger btn-login'> Login</button>
                                </div>
                                <a href="/register"> Create a new account</a>
                            </form>

                        </div>

                        <div className='col-md-8 login-block-side'>
                            <div className='login-block-side__img-block'>
                                <img src={logo} alt="logo.png" className='rounded-circle img-block'/>
                            </div>
                            <div className='login-block-side__title-block'>
                                <h4>Welcome</h4>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Login;