import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar} from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import config from './config/defaultBlurprint.json'





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: ' Geneva, sans-serif',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: 1,
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
    
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  btn1: {
    // color: '#00000',
    // fontSize: '20px',
    // borderRadius:"50px",
    // transform: "translate(-50%, -50%)",
    // display: "flex",
    // left:"50%",
    // position: "absolute",
    // textAlign:"center",

    // alignItems: "center",
    // justifyContent: "center"
    display:"inline-block",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"50px",
    backgroundColor:"orange",
    
    transition:"all 0.2s",
    background: "transparent",
    texeAlign:"center",
    borderSpacing:"15px",
    marginRight:"16px",
    outline: "none",
    fontSize:"20px",
    },
   
}));
export default function Header() {
  const classes = useStyles();

  
  return (
    <div className={classes.root} id="header">
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar className={classes.appbarWrapper}>
        <h1 className={classes.appbarTitle}>
          Mortgage 
        </h1>
        
          <img  height="50px" width="50px" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="logo"></img>
        
      </Toolbar>
    </AppBar>

    
      <div className={classes.container}>
        <h1 className={classes.title}>
          I Would Like to
        </h1>
        
          
            <Button className={classes.btn1} size="large" variant="contained">Buy Property</Button>
            <Button className={classes.btn1} size="large" variant="contained">Sell Property</Button>
        
      </div>
    
  </div>
  );
}
