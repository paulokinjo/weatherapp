import Grid from '@material-ui/core/Grid';
import React from 'react';
import ScaleRadioButtons from '../../Scales/components/ScaleRadioButtons';
import WeatherBarChartList from '../components/charts/WeatherBarChartList';
import WeatherCardsList from '../components/WeatherCardsList';

const WeatherInfoScreen = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={false} sm={2} />
        <Grid item container xs={12} sm={8} direction="column" spacing={8}>
          <Grid item xs={12}>
            <ScaleRadioButtons />
          </Grid>
          <Grid item xs={12}>
            <WeatherCardsList />
          </Grid>
          <Grid item container xs={12} direction="column">
            <WeatherBarChartList />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};

export default WeatherInfoScreen;
