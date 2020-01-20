import React, {Component} from 'react';

import './Style/App.css';
import './Style/Style.css';
import './Style/Reset.css';

// Bootstrap
import './Style/bootstrap.min.css';

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";


class App extends Component{
	render() {
		return(
			// <Login />
			<Register />
		)}
}

export default App;