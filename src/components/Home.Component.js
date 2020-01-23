import React, {Component} from 'react';
import Header from "./Layouts/Header";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        );
    }
}

export default HomeComponent;