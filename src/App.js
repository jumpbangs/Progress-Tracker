import React, {Component} from 'react';

import './style/App.css';
import './style/Style.css';
import './style/Reset.css';


//Router
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

// Bootstrap
import './style/bootstrap.min.css';

import LoginComponent from "./components/Login.Component";
import RegisterComponent from "./components/Register.Component";
import HomeComponent from "./components/Home.Component";

const isLoggedIn = () => {
    return localStorage.getItem('userToken');
};

const EnhancedRoute = withLoginCheck(HomeComponent);

function withLoginCheck(Component) {
    return (props) => {
        if (isLoggedIn())
            return (
                <Component {...props}/>);
        else
            return (
                <Redirect to='/'/>);
    }
};

class App extends Component {

    render() {
        console.log(isLoggedIn());
        return (
            <Router>
                <Switch>
                    <Route exact from='/' to='login' component={LoginComponent}/>
                    <Route exact path='/register' component={RegisterComponent}/>
                    <Route exact path='/home' component={EnhancedRoute}/>
                </Switch>
            </Router>
        )
    }
}

export default App;