import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    appbar:{
        background: 'none',
        fontFamily: 'Raleway',
    },
    appbarWrapper:{
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle:{
        flexGrow: '1',
    },
    icon:{
        color: '#fff',
        fontSize: '3rem'
    }
}))

export default function Header(){
    const classes = useStyles();
    return <div>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>Alybek.</h1>
                <IconButton className={classes.icon}>
                    <KeyboardArrowDownIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>;
}