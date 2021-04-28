import Grid from '@material-ui/core/Grid';
import React from 'react';
import WeatherBarChart from './WeatherBarChart';
import { useSelector } from 'react-redux';

const WeatherBarChartList = ({ weatherData }) => {
  const scale = useSelector((state) => state.scale.components);

  return (
    <>
      <Grid
        item
        container
        justify="center"
        spacing={2}
        direction="row"
        alignItems="flex-end"
        style={{ marginTop: '20px' }}
      >
        {weatherData.map((data) => (
          <Grid key={data.dt} item xs={3} sm={1} style={{ marginLeft: 15 }}>
            <WeatherBarChart weatherData={data} scale={scale} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WeatherBarChartList;
