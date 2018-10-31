import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import './styles.css';


export class UserView extends React.Component{
	render(){
        return(
        	<main>
            <div className = "section">
                <Avatar id="userPicture">
                </Avatar>
                <div className="userInfo">
                    <Typography id="name">{this.userName}</Typography>
                    <Typography id="rating">{this.userRating}</Typography>
                </div>
            </div>
            <div className = "menu">
                <Avatar className ="menuUser" />
                <Avatar className = "menuUser" />
            </div>
            <div className = "section">

            </div>
            <div className = "section news">
                <section id="listNews">

                </section>

            </div>
        </main>);

    }



}
