import React from 'react'
import{ makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '110vh',
        backgroundSize: '75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/empty-whiteboard.png"})`,
    },
    wall:{
        minHeight: '110vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/brickwall.jpg"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
}));

export default function App(){
    const classes = useStyles();
    return(
        <>
    
        <div className = {classes.wall}>
        <Header/>
        <div className ={classes.root}>
        <CssBaseline/>
        </div>
        </div>
        </>
    )
}