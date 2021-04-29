import Paper from '@material-ui/core/Paper';
import React from 'react';
import { getScale } from '../../../scale/utils/convertions';
import weatherBarChartStyles from './styles/weatherBarChart.styles';

const WeatherBarChart = ({ weatherData, scale }) => {
  const classes = weatherBarChartStyles();

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        style={{ height: (weatherData.main.temp / 3).toString().concat('px') }}
        elevation={10}
      >
        <span className={classes.date}>{weatherData.dt_txt.split(' ')[1]}</span>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weatherInfo"
          width="40"
        />
        {weatherData.weather[0].main}
      </Paper>
      <span className={classes.temperature}>
        {getScale(weatherData.main.temp, scale)}
      </span>
    </div>
  );
};

export default WeatherBarChart;
