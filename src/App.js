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
		this.child = React.createRef();
		
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
		this.state = {newUserName:"", newUserEmail:"", newUserNick:"", newUserRol:"", newUserPass:"", newUserRating: 0};
	}
	

	
  render() {
	if (this.state.Logged){
		return(
			<div className="App">
				<Menu tipo = {this.state.User.rol}/>
				<RegisterView currentUser={this.state.User}/>
			</div>
		);
	}
	else{
		return(
			<div className="App">
				<Login ref = {this.child}
						handleLogin = {this.handleLogin} 
						handleUserChange = {this.handleUserChange}
						handlePassChange = {this.handlePassChange}
						handleUserNewName = {this.handleUserNewName}
						handleUserNewEmail = {this.handleUserNewEmail}
						handleUserNewNick = {this.handleUserNewNick}
						handleUserNewRol = {this.handleUserNewRol}
						handleUserNewPass = {this.handleUserNewPass}
						handleSubmitRegister = {this.handleSubmitRegister}
						/>
			</div>
		);
	}
  }
  
	//seccion de login -----------------------------------------------------------------------------------------------------------------------------------------------------------------
 
	/**
	*	oyente para el usuario que se quiere loggear
	*/
	handleUserChange = (event) =>{
		this.setState({ user : event.target.value});	
	}
	
	/**
	*	oyente para la contraseña del  usuario que se quiere loggear
	*/
	handlePassChange = (event) =>{
		this.setState({ pass : event.target.value});
	}

	/**
	*	funcion para verificar la corectitud de los datos ingresados
	*/
	handleLogin = () => {
		var u = this.state.user;
		if (this.state.user.includes("@")){
    		u = this.state.usersXemail[this.state.user];
			this.setState({ user : u });
		}
		if (this.state.users[u] && this.state.users[u].pass == this.state.pass){
			//var objectUser = {nick:u,name:this.state.users[u].name,email:this.state.users[u].email,rol:this.state.users[u].rol,rating:2}
			this.setState({Logged : true});
		}else{
			alert("Usuario o contraseña Incorrecta. Intente de nuevo");
		}		
	}

	//seccion de registro -----------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	*	oyente para el nombre del usuario que se quiere registrar
	*/
	handleUserNewName = (event) => {
		this.setState({newUserName: event.target.value});
	}
	
	/**
	*	oyente para el email del usuario que se quiere registrar
	*/
	handleUserNewEmail = (event) => {
		this.setState({newUserEmail: event.target.value});
	}
	
	/**
	*	oyente para el nickname del usuario que se quiere registrar
	*/
	handleUserNewNick = (event) => {
		this.setState({newUserNick: event.target.value});
	}
	
	/**
	*	oyente para el rol del usuario que se quiere registrar
	*/
	handleUserNewRol = (event) => {
		this.setState({newUserRol: event.target.value});
	}
	
	handleUserNewPass = (event) => {
		this.setState({newUserPass: event.target.value});
	}
	
	/**
	* registrar el usuario
	¨*/
	handleSubmitRegister = () => {
		var u = this.state.newUserNick;
		//verificar en el backEnd si el nick y el email son validos
		if (!this.state.users[u]){
			this.child.current.isValid(true);
		}else{
			this.child.current.isValid(false);
		}
	}
}

export default App;
