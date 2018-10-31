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

export class Menu extends React.Component{
	render(){
		return(
			<div className = "NavBar">
				<img src={require('./images/name.png')} id="imageMenu" />
				<div className="menu">
					<a href="">
						Registrar Producto
					</a>
					<a>
						Noticias
					</a>
					<a>
						Plazas
					</a>
				</div>
			</div>
		
		);
	}
}