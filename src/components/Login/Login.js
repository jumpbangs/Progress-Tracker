import React, {Component} from 'react';

//Logo
import logo from '../../assets/img/logo.png';

import AxiosApi from '../../api/axios.config';
import {Link} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event)=>{
        this.setState({[event.target.name] : event.target.value});
    };

    onSubmit = (event) =>{
        event.preventDefault();

        const details = {
            UserName: this.state.username,
            Password: this.state.password
        };

        AxiosApi.post('auth/login', details)
            .then(response =>{
                alert("Welcome");
            })
            .catch(error =>{
                if(error){
                    alert('Sorry your login details are not correct');
                }
            });
    };



    render() {
        return (
            <div className='login-block'>

                <div className='container block__container'>
                    <div className='row'>

                        <div className='col-md-4 block__section'>
                            <h2>Login</h2>
                            <form onSubmit={this.onSubmit} className='login-form'>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        placeholder='Username...'
                                        name='username'
                                        onChange={this.onChange}
                                        value={this.state.username}

                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='password'
                                        placeholder='Password...'
                                        name='password'
                                        onChange={this.onChange}
                                        value={this.state.password}
                                    />
                                </div>
                                <div className='form-group'>
                                    <button type='submit'  className='btn btn-danger form-control btn-login'> Login</button>
                                    <Link to='/register' >
                                        Create a new account
                                    </Link>
                                </div>

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