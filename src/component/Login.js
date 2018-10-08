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
		this.state={User:"",pass:""};
	}

	handleUserChange = (event) =>{
		this.setState({ User : event.target.value});
	}
	
	handlePassChange = (event) =>{
		this.setState({ pass : event.target.value});
	}
	
	handleSubmit =() =>{
		
	}
	
	SignUp = () => (
		<SignUp/>
	);
	
    render(){
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
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange = {this.props.handleUserChange}/>
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
								onClick = {this.props.handleSubmit}
                            >
                                Iniciar 
                            </Button>
                        </form>
						<a className= "linkTo">¿No se ha registrado?... ingrese ahora !GRATIS¡</a>
						
                    </Paper>
					<div id="sideImg"/>
                </main>
            </React.Fragment>
        );
    }

}