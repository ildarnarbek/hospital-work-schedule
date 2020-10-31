import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import { useTheme } from '@material-ui/core/styles';


import useStyles from './styles';


const Form = () => {
  const classes = useStyles();
  // const theme = useTheme();
  

  

  return (
    <div className={classes.home}>
      
      <Paper>
        <Grid direction="column" container><TextField id="outlined-basic" label="E-mail" placeholder="enter your e-mail" variant="outlined" />
      <TextField id="outlined-basic" label="Password" placeholder="enter your password" variant="outlined" />  
      <Button variant="contained" color="primary">Вход</Button></Grid>
    
      
      </Paper>       
    </div>
  );
};

export default Form;
