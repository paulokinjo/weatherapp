import Grid from '@material-ui/core/Grid';
import React from 'react';
import WeatherBarChart from './WeatherBarChart';
import { useSelector } from 'react-redux';
import weatherBarChartListStyles from './styles/weatherBarCharList.styles';

const WeatherBarChartList = ({ weatherData }) => {
  const scale = useSelector((state) => state.scale.components);
  const classes = weatherBarChartListStyles();

  return (
    <>
      <Grid
        item
        container
        justify="center"
        spacing={2}
        direction="row"
        alignItems="flex-end"
        className={classes.root}
        data-testid="weatherBarChartList"
      >
        {weatherData.map((data) => (
          <Grid
            key={data.dt}
            item
            xs={3}
            sm={1}
            className={classes.containerItem}
          >
            <WeatherBarChart weatherData={data} scale={scale} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WeatherBarChartList;
