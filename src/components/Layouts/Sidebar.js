import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className='row'>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className='nav flex-column'>
                            <li className="nav-item">
                                <a href="#" className="nav-link active">DashBoard</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Tasks</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Sidebar;