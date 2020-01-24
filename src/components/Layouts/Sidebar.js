import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className='nav flex-column navbar-items'>
                                <li className='nav-item nav-icon'>
                                    <a href="#">
                                        <i className="fas fa-home"/>
                                        DashBoard
                                    </a>
                                </li>
                                <li className="nav-item nav-icon">
                                    <a href="#">
                                        <i className="fas fa-user" />
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item nav-icon">
                                    <a href="#">
                                        <i className="fas fa-tasks" />
                                        Tasks
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;