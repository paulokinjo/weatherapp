import Grid from '@material-ui/core/Grid';
import React from 'react';
import WeatherBarChart from './WeatherBarChart';

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const WeatherBarChartList = () => {
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
        {list.map((l) => (
          <Grid key={l} item xs={2} sm={1}>
            <WeatherBarChart />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WeatherBarChartList;
