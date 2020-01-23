import React, {Component} from 'react';

import AxiosApi from '../utils/axios.config';
import Etc from '../utils/etc';

const initialState = {
    name: '',
    username: '',
    password: '',
    email: '',
}


class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const registerDetails = {
            UserName: this.state.username,
            Name: this.state.name,
            Password: this.state.password,
            Email: this.state.email,
        };

        AxiosApi.post('auth/register', registerDetails)
            .then(response => {
                let res = Etc.convertToString(response);
                this.props.history.push('/');
                alert(res.data.msg);
            })
            .catch(error => {
                let err = Etc.convertToString(error);
                console.log(err.message);
                if (error) {
                    alert(err);
                }
            })


    };


    render() {
        return (
            <div className='register-block'>

                <div className='container block__container'>

                    <div className='row'>
                        <div className='col block__section'>
                            <h2>Register</h2>
                            <p>Fill in your details to register</p>

                            <form onSubmit={this.onSubmit} className='register-form'>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='name'
                                        placeholder='name'
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='username'
                                        placeholder='username'
                                        onChange={this.onChange}
                                        value={this.state.username}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='email'
                                        placeholder='email'
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='password'
                                        name='password'
                                        placeholder='password'
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        required
                                    />
                                </div>

                                <div className='form-check'>
                                    <button className='btn btn-danger btn-block' type='submit'>Register</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default RegisterComponent;