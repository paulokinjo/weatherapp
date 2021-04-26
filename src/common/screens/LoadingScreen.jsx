import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingStyles from './styles/loadingScreen.styles';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={LoadingStyles.spinner}>
      <CircularProgress />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
