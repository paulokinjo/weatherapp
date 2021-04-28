import Paper from '@material-ui/core/Paper';
import React from 'react';
import { getScale } from '../../../scale/utils/convertions';

const WeatherBarChart = ({ weatherData, scale }) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Paper
        style={{
          height: (weatherData.main.temp / 3).toString().concat('px'),
          width: '60px',
          backgroundColor: 'aqua',
          maxWidth: 100,
          margin: 'auto',
          transition: '0.3s',
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          },
        }}
        elevation={10}
      >
        {weatherData.dt_txt.split(' ')[1]}
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weatherInfo"
          width="40"
        />
        {weatherData.weather[0].main}
      </Paper>
      {getScale(weatherData.main.temp, scale)}
    </div>
  );
};

export default WeatherBarChart;
