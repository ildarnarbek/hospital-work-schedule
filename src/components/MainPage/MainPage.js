import React from 'react';

// import { useTheme } from '@material-ui/core/styles';

import useStyles from './styles';

const MainPage = () => {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.root}>
      <p>hello Tony</p>
    </div>
  );
};

export default MainPage;
