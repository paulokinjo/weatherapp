import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '45%',
        left: '45%',
      }}
    >
      <CircularProgress />
      <span style={{ paddingLeft: '20px' }}>Loading...</span>
    </div>
  );
};

export default LoadingScreen;
