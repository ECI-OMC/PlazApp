import React, { Component } from 'react';
import './App.css';
import {LandingView} from "./views/LandingView";
import {LoginView} from "./views/LoginView";
import {DashboardView} from "./views/DashboardView";
import {RegisterView} from "./component/RegisterView";
import {PlazasView} from "./component/PlazasView";
import {UserView} from "./component/UserView";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";


class App extends Component {
	Landing = () => <LandingView />;
	Login = () => <LoginView />;
	Dashboard = () => <DashboardView />;
    RegisterProduct = () => <RegisterView/>;
    Plazas = () => <PlazasView/>;
    user = () => <UserView/>;

    render() {
        let routeOptions;
        if (localStorage.getItem("isLoggedIn")) {
            routeOptions = (
                <Switch>
                    <Route exact path="/dashboard" component={this.Dashboard} />
                    <Redirect to="/" />
                </Switch>
            );
        } else {
            routeOptions = (
                <Switch>
                    <Route exact path="/" component={this.Landing} />
                    <Route exact path="/login" component={this.Login} />
                    <Route exact path="/dashboard" component={this.Dashboard} />
                    <Route exact path="/newProduct" component={this.RegisterProduct} />
                    <Route exact path="/plaza" component={this.Plazas} />
                    <Redirect to="/" />
                </Switch>
            );
        }
        return (
            <div>
                <Router>{routeOptions}</Router>
            </div>
        );
    }

}

export default App;
