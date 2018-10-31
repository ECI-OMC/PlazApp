import React from 'react';
import './SignUp.css';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import moment from "moment";
import './SignUp.css';
import './styles.css';


export class SignUp extends React.Component{

	constructor(props) {
		super(props);
		this.state = {errorEmail : "ingrese su email", alertEmail: "alert", errorNick : "ingrese un nombre de usuario", alertNick: "noAlert", pass1:"", pass2:"none", alertPass:"digite nuevamente la contraseña", selected : ""};
   }
   
      setPass = (event) => {
		  this.setState({ pass1 : event.target.value });
		  this.props.newPass(event);
	  }
	  
	  confirmPass = (event) => {
		  this.setState({ pass2 : event.target.value });
	  }
   
    render(){

        return (
			<React.Fragment>
				<Paper className="mainLayout">
					<div className="headerSignUp">
						<h1> Registrate! </h1>
					</div>
					<form className="form">
						<div className="formControl">
							<p> Nombre: </p>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="name">Ingrese su nombre y sus apellidos </InputLabel>
								<Input id="name" 
									name="name"  
									autoFocus 
									onChange={this.props.newName}
								/>
							</FormControl>
						</div>
						<div className="formControl">
							<p> Email: </p>
							<FormControl margin="normal" required fullWidth className={this.state.alertEmail}>
							<InputLabel htmlFor="email">{this.state.errorEmail}</InputLabel>
								<Input
									name="email"
									type="text"
									onChange={this.props.newEmail}
								/>
							</FormControl>
						</div>
						<div className="formControl">
							<p> Nick Name: </p>
							<FormControl margin="normal" required fullWidth className={this.state.alertNick}>
								<InputLabel htmlFor="nick">{this.state.errorNick}</InputLabel>
								<Input
									name="nick"
									type="text"
									onChange={this.props.newNick}
								/>
							</FormControl>
						</div>
						<div className="formControl">
							<p> Ingrese la contraseña: </p>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="pass">digite su contraseña</InputLabel>
								<Input
									name="pass"
									type="password"
									onChange={this.setPass}
								/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="pass2">{(this.state.pass1==this.state.pass2)? "las contraseñas coinciden" : "las contraseñas no coinciden"}</InputLabel>
								<Input
									name="pass2"
									type="password"
									onChange={this.confirmPass}
								/>
							</FormControl>
						</div>
						<FormControl>
						  <FormLabel>Tipo de cuenta</FormLabel>
						  <RadioGroup
								aria-label="Registrar Como: "
								name="rolUser"
								className="radioButton"
								onChange={this.props.newRol}
						  >
								<FormControlLabel value="Vendedor" control={<Radio />} label="Vendedor" />
								<FormControlLabel value="Comprador" control={<Radio />} label="Comprador" />
						  </RadioGroup>
						</FormControl>
					</form>
				</Paper>
				<Paper className="mainLayout">
					<div className="midSection">
						<Button
							type="submit"
							variant="raised"
							color="primary"
							className="buttonSign"
							disabled={this.state.pass1!=this.state.pass2}
							onClick = {this.props.register}
						>
							Registrarse 
						</Button>
					</div>
					<div className="midSection">
						<Button
							type="submit"
							variant="raised"
							color="primary"
							className="buttonSign"
							onClick = {this.props.cancelSignUp}
						>
							Cancelar 
						</Button>
					</div>
				</Paper>
			</React.Fragment>

        );
    }

}