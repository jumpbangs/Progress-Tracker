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

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

class App extends Component{
	render() {
		return(
			<Router>
				<Switch>
					<Route exact from='/' to='login' component={Login} />
					<Route exact path='/register' component={Register}/>
				</Switch>
			</Router>
		)}
}

export default App;