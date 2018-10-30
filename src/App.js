import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./component/Login";
import {RegisterView} from "./component/RegisterView";
import {PlazasView} from './component/PlazasView';
import {Menu} from './component/Menu';


localStorage.setItem("User", "admin@plazapp.com");

localStorage.setItem("Pass", "123456");


class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {Logged: false, User: "", pass: ""};
	}
	

	handleLogin = (state) => {
		this.setState({Logged: state});
		
	}

	
  render() {
	if (this.state.Logged){
		return(
			<div className="App">
				<Menu/>
				<RegisterView/>
			</div>
		);
	}
	else{
		return(
			<div className="App">
				<Login handleLogin = {this.handleLogin}/>
			</div>
		);
	}
  }
}

export default App;
