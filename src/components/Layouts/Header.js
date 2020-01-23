import React, {Component} from 'react';

class Header extends Component {

    onSignOut = (event) =>{
        event.preventDefault();
        localStorage.removeItem('userToken');
        localStorage.removeItem('auth');
        this.props.history.push('/');
    };


    render() {
        console.log(this.props);
        return (
            <div>
                <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a onClick={this.onSignOut} className="nav-link">Sign Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;