import Paper from '@material-ui/core/Paper';
import React from 'react';

const WeatherBarChart = () => {
  return (
    <div>
      <Paper
        style={{
          height: (Math.random(100) * 100).toString().concat('px'),
          width: '30px',
          backgroundColor: 'aqua',
          maxWidth: 100,
          margin: 'auto',
          transition: '0.3s',
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          },
        }}
        elevation={15}
      />
      23
    </div>
  );
};

export default WeatherBarChart;
