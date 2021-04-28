import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import loadingScreenStyles from './styles/loadingScreen.styles';

const LoadingScreen = () => {
  const classes = loadingScreenStyles();
  return (
    <div className={classes.spinner}>
      <CircularProgress />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
