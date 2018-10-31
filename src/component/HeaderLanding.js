import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/logo.png';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function HeaderLanding(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <a href="/">
                        <img src={logo} alt="logo" width="100" />
                    </a>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Bienvenidos
                    </Typography>
                    <Button color="inherit" href="/login">Entrar</Button>
                    <Button color="inherit" href="/newUser">Registrarse</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

HeaderLanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderLanding);