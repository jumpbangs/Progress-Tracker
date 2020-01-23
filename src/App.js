import React, {Component} from 'react';

import './style/App.css';
import './style/Style.css';
import './style/Reset.css';


//Router
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

// Bootstrap
import './style/bootstrap.min.css';

import LoginComponent from "./components/Login.Component";
import RegisterComponent from "./components/Register.Component";
import HomeComponent from "./components/Home.Component";

class App extends Component{
	render() {
		return(
			<Router>
				<Switch>
					<Route exact from='/' to='login' component={LoginComponent} />
					<Route exact path='/register' component={RegisterComponent}/>
					<Route exact path='/home' component={HomeComponent}/>
				</Switch>
			</Router>
		)}
}

export default App;