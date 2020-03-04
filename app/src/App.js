import React, {Component} from 'react';

//Router
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

import LoginComponent from "./components/Login.Component";
import RegisterComponent from "./components/Register.Component";
import HomeComponent from "./components/Home.Component";
import  ForgetPassComponent  from './components/ForgetPass.Component';
import  ProfileComponent  from './components/Profile.Component';

const isLoggedIn = () => {
    return localStorage.getItem('userToken');
};

const EnhancedRoute = withLoginCheck(HomeComponent);
const EnhancedProfileRoute = withLoginCheck(ProfileComponent);

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
        return (
            <Router>
                <Switch>
                    <Route exact from='/' to='login' component={LoginComponent}/>
                    <Route exact path='/forgetpass' component={ForgetPassComponent}/>>
                    <Route exact path='/register' component={RegisterComponent}/>
                    <Route exact path='/home' component={EnhancedRoute}/>
                    <Route path="/profile" component={EnhancedProfileRoute} />
                </Switch>
            </Router>
        )
    }
}

export default App;