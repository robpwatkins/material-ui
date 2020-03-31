import React from 'react';
import './App.css';
import { Button, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

function App () {
  const useStyles = makeStyles ({
    heyooStyle: {
      fontStyle: 'oblique'
    }
  })

    const classes = useStyles();
    return (
      <div className="App">
        <Typography className={classes.heyooStyle} variant='h5' color='secondary'>
          Heyoo
        </Typography>
        <Button color='primary' variant='contained'>Heyoo</Button>
      </div>
    );
}

export default App;
