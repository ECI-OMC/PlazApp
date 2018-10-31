import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Select  from '@material-ui/core/Select';
import './menu.css';
import {Login} from './Login';

export class Menu extends React.Component{
	
	constructor (props){
		super(props);
		this.logOut = false;
	}
	
	salir = () => {
		this.logOut = true;
	}
	
	sellerMenu = () =>{
		return (
			<div className = "NavBar">
				<img src={require('./images/name.png')} id="imageMenu" />
				<div className="menu">
					<a value="Registro">
						Registrar Producto
					</a>
					<a value="Noticias">
						Noticias
					</a>
					<a value="Plazas">
						Plazas
					</a>
					<a onclick={this.salir()}>
						Salir
					</a>
				</div>
			</div>
		);
	}
	
	clientMenu = () => {
		return (
			<div className = "NavBar">
				<img src={require('./images/name.png')} id="imageMenu" />
				<div className="menu">
					<a>
						Noticias
					</a>
					<a>
						Plazas
					</a>
					<a>
						Salir
					</a>
				</div>
			</div>
		);
	}
	
	render(){
		if (!this.logOut){		
			if (this.props.tipo == "Vendedor"){
				return(	
					this.sellerMenu()
				);
			}else{
				return(
					this.clientMenu()
				);
			}
		}else{
			return <Login />
		}
	}
}