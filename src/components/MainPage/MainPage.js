import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// import { useTheme } from '@material-ui/core/styles';

import useStyles from './styles';
import Form from '../Form';

const MainPage = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDrop = () => {
    setCount(0);
  };

  return (
    <div className={classes.home}>
      <p>hello Tony</p>
      <Grid container>
      <Form />
        <Grid item lg={12} sm={6}>
          <p>item1</p>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            ++
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDrop}>
            Drop
          </Button>
        </Grid>
        <Grid item lg={12} sm={6} className={classes.item2}>
          <p> item2 </p>
          {count}
        </Grid>
      </Grid>

    </div>
    
      );
};

export default MainPage;
