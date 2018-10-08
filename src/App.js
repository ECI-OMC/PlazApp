import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./component/Login";
import {RegisterView} from "./component/RegisterView";
import {PlazasView} from './component/PlazasView';
import {Menu} from './component/Menu';

localStorage.setItem("Logged", false);

localStorage.setItem("User", "admin@plazapp.com");

localStorage.setItem("Pass", "123456");

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {Logged : JSON.parse(localStorage.getItem("Logged")), User: "", pass: ""};
	}
	
	Login = () => (
		<Login 	handleSubmit = {this.handleSubmit}
				handleUserChange={this.handleUserChange}
				handlePassChange={this.handlePassChange}/>
	);
	
	RegisterView = () => (
		<RegisterView />
	);
	
	PlazasView = () => (
		<PlazasView />
	);
	
	handleSubmit= () =>{
		if (this.state.User == localStorage.getItem("User") && this.state.pass== localStorage.getItem("Pass")){
			alert("login succesful");
			localStorage.setItem("Logged", true);
			this.setState({Logged:true});
		}
		else{
			alert("user name or password incorrect... try again");
		}
	}

	handleUserChange = (event) =>{
		this.setState({ User : event.target.value});
	}
	
	handlePassChange = (event) =>{
		this.setState({ pass : event.target.value});
	}
	
  render() {
	if (!this.state.Logged){
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
				<Login />
			</div>
		);
	}
  }
}

export default App;
