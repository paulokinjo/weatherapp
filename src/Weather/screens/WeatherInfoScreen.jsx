import Grid from '@material-ui/core/Grid';
import React from 'react';
import ScaleRadioButtons from '../../scale/components/ScaleRadioButtons';
import WeatherBarChartList from '../components/charts/WeatherBarChartList';
import WeatherCardsList from '../components/WeatherCardsList';
import { useSelector } from 'react-redux';

const WeatherInfoScreen = () => {
  const weatherData = useSelector((state) => state.weather.data);

  return (
    <>
      <Grid container justify="center" direction="row">
        <Grid item xs={false} sm={2} />
        <Grid
          item
          container
          xs={12}
          sm={8}
          direction="column"
          spacing={10}
          style={{ marginTop: '10px' }}
        >
          <Grid item xs={12}>
            <ScaleRadioButtons />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '30px' }}>
            {weatherData && <WeatherCardsList weatherData={weatherData} />}
          </Grid>
          <Grid item xs={12}>
            <WeatherBarChartList />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};

export default WeatherInfoScreen;
