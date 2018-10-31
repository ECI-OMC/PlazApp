import React from 'react'
import './LandingView.css'
import HeaderLanding from "../component/HeaderLanding";
import logo from "../logo.svg";

import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";

export class LandingView extends React.Component{
    render(){
        return (
            <div>
                <HeaderLanding/>
                <br/>

                <Paper className="paper">
                    <Typography variant="h5" component="h3">
                        Con plazapp podras comprar productos agricolas Colombianos.
                    </Typography>
                    <Typography component="p">
                        Podras comprar, vender, buscar y conocer las mejores plazas de bogota.
                    </Typography>
                    <br/>
                    <img src={logo} />
                </Paper>


            </div>
        );
    }
}