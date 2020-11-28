// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh'
  }
}))

function App() {
  const classes= useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline></CssBaseline>
      <Header/>
    </div>
  );
}

export default App;
