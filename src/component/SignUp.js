import React from 'react';
import './SignUp.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import moment from "moment";


export class SignUp extends React.Component{

	constructor(props) {
		super(props);
		this.state = {text: '', priority: 0, dueDate: moment()};
   }
   
    render(){

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">

                    </Paper>
                </main>
            </React.Fragment>

        );
    }

}