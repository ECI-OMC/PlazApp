import React from 'react';
import  {Login} from "../component/Login";
import axios from "axios";
import HeaderLanding from "../component/HeaderLanding";



export class LoginView extends React.Component{

    constructor(props){
        super(props);
        this.state = {isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
            email: "", password: "" };
    }


    handleSignIn = () => {
        if (this.state.email === localStorage.getItem("Email") &&
            this.state.password === localStorage.getItem("Password")) {
            localStorage.setItem("isLoggedIn", true);
            /**this.setState({isLoggedIn: true});
            axios.post('http://localhost:8080/user/login', {
                username: "xyz",
                password: "password"
            })
                .then(function (response) {
                    console.log(response.data);
                    localStorage.setItem("Token",JSON.stringify(response.data.accessToken))
                })
                .catch(function (error) {
                    console.log(error);
                });*/
        }
    }


    handleEmail = event => {
        this.setState({
            email: event.target.value
        });
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    render(){
        return (
            <div>
                <HeaderLanding/>
                <br/>

                    <Login handleSignIn={this.handleSignIn}
                           handleEmail={this.handleEmail}
                           handlePassword={this.handlePassword}
                    />


            </div>
        );
    }

}