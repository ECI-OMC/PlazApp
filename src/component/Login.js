import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {SignUp} from './SignUp';
import './Login.css'
import './styles.css';
import RegisterView from './RegisterView.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


export class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {toSignUp : false, user:""};
	}
	
	goToSignUp = () => {
		this.setState({toSignUp : true});
	}
	
	completedSignUp = () => {
		this.props.handleSubmitRegister();
	}
	
	isValid = (valid) => {
		if (valid){
			alert("se ha registrado exitosamente");
			this.cancelSignUp();
		}else{
			alert("alguno de los datos no se puede registrar");
		}
	}
	
	cancelSignUp = () => {
		this.setState({toSignUp : false});
	}
	
	userChange = (event) => {
		this.setState({user : event.target.value});
		this.props.handleUserChange(event);
	}
	
    render(){
		if (this.state.toSignUp){
			return <SignUp 
					cancelSignUp = {this.cancelSignUp}
					newName = {this.props.handleUserNewName}
					newEmail = {this.props.handleUserNewEmail}
					newNick = {this.props.handleUserNewNick}
					newRol = {this.props.handleUserNewRol}
					newPass = {this.props.handleUserNewPass}
					register = {this.completedSignUp}
					/>;
			
		}else{
			return (
				<React.Fragment>
					<CssBaseline />
					<main className="layout">
						<Paper className="paper">
							<Avatar className="avatar">
								<LockIcon />
							</Avatar>
							<Typography variant="headline">Iniciar sesion</Typography>
							<form className="form">
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="email">Email </InputLabel>
									<Input id="email" name="email" autoComplete="email" autoFocus onChange = {this.userChange}/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="password">Contraseña</InputLabel>
									<Input
										name="password"
										type="password"
										id="password"
										autoComplete="current-password"
										onChange={this.props.handlePassChange}
									/>
								</FormControl>
								<Button
									type="submit"
									fullWidth
									variant="raised"
									color="primary"
									className="submit"
									disabled = {this.state.user==""}
									onClick = {this.props.handleLogin}
								>
									Iniciar sesion
								</Button>
							</form>
							
							<a className= "linkTo" onClick={this.goToSignUp}>Registrate Ahora</a>
							
						</Paper>
						<div id="sideImg"/>
					</main>
				</React.Fragment>
			);
		}
    }

}
