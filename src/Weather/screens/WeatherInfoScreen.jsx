import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ScaleRadioButtons from '../../scale/components/ScaleRadioButtons';
import WeatherBarChartList from '../components/charts/WeatherBarChartList';
import WeatherCardsList from '../components/WeatherCardsList';
import { filterCardsByDate } from '../store/actions/weatherActions';
import { setScale } from '../../scale/store/components/actions/scaleComponentActions';

const WeatherInfoScreen = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.reducer);

  useEffect(() => {
    if (weather?.data?.length) dispatch(filterCardsByDate(weather.data));
  }, [dispatch, weather.data]);

  const handleScaleChange = (event) => {
    dispatch(setScale(event.target.value));
  };

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
            {weather?.data?.length && (
              <ScaleRadioButtons onChange={handleScaleChange} />
            )}
          </Grid>
          <Grid item xs={12} style={{ marginTop: '30px' }}>
            {weather && <WeatherCardsList weatherData={weather.cards.all} />}
          </Grid>
          <Grid item xs={12} style={{ minHeight: 250, marginTop: -25 }}>
            {weather && (
              <WeatherBarChartList weatherData={weather.cards.selected} />
            )}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};

export default WeatherInfoScreen;
