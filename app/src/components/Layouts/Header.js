import React, {Component} from 'react';

class Header extends Component {

    onSignOut = (event) => {
        event.preventDefault();
        localStorage.removeItem('userToken');
        localStorage.removeItem('auth');
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">WebSiteName</a>

                        <div className="nav navbar-nav navbar-right">
                            <a onClick={this.onSignOut} className='nav-item nav-link sign-out'>
                                <i className="fas fa-sign-out-alt" />
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;