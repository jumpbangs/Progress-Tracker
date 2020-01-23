import React, {Component} from 'react';
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className='container-fluid'>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default HomeComponent;