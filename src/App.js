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
		this.state = {	
						user:"", 
						pass:"", 
						Logged: false, 
						User: {nick:"",name:"",rol:"",email:"",rating:0}, 
						users : {
							"admin":{nick:"admin",name:"Administrator PLazApp",rol:"Admin",email:"administrator@plazapp.com",rating:10, pass:"admin2018"}, 
							"Jdcc":{nick:"Jdcc",name:"Jefferson Castañeda", rol:"Vendedor", email:"jefferdcc@gmail.com",rating:3,pass:"Jeffer96"}, 
							"Eeci":{nick:"Eeci",name:"Estudiante Eci", rol:"Comprador", email:"estudiante-eci@gmail.com",rating:0,pass:"estudiante"},
							"1234":{nick:"1234", name:"1234", rol:"none", email:"1234@gmail.com", rating:0,pass:"1234"}
								},
						usersXemail: {
							"jefferdcc@gmail.com":"Jdcc",
							"administrator@plazapp.com":"admin",
							"estudiante-eci@gmail.com":"Eeci"
								}
					};
	}
	

	handleLogin = (state) => {
		this.setState({Logged: state});
		
	}

	handleCurrentUser = (nck,nm,rl,ml,rtng) => {
		this.setState({User: {nick:nck, name:nm, rol:rl, email: ml, rating: rtng}});
	}

	handleRegisterUser = (nck, nm, rl, ml, rtng) => {
		this.users[nck] = {nick: nck, name:nm, rol: rl, email: ml, rating:rtng};
	}

	
  render() {
	if (this.state.Logged){
		return(
			<div className="App">
				<Menu/>
				<RegisterView currentUser={this.state.User}/>
			</div>
		);
	}
	else{
		return(
			<div className="App">
				<Login handleLogin = {this.handleLogin} 
						handleUserChange = {this.handleUserChange}
						handlePassChange = {this.handlePassChange}/>
			</div>
		);
	}
  }

	handleUserChange = (event) =>{
		this.setState({ user : event.target.value});	
	}
	
	handlePassChange = (event) =>{
		this.setState({ pass : event.target.value});
	}

	handleLogin = (event) => {
		var u = this.state.user;
		if (this.state.user.includes("@")){
    		u = this.state.usersXemail[this.state.user];
			this.setState({ user : u });
		}
		if (this.state.users[u] && this.state.users[u].pass == this.state.pass){
			this.setState({Logged : true})
		}else{
			alert("Usuario o contraseña Incorrecta. Intente de nuevo");
		}		
	}
}

export default App;
