import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ScaleRadioButtons from '../../scale/components/ScaleRadioButtons';
import WeatherBarChartList from '../components/charts/WeatherBarChartList';
import WeatherCardsList from '../components/WeatherCardsList';
import { filterCardsByDate } from '../../store/weather/weatherActions';

const WeatherInfoScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const weatherCardsData = useSelector((state) => state.weather.cards);

  useEffect(() => {
    if (weatherData.length) dispatch(filterCardsByDate(weatherData));
  }, [dispatch, weatherData]);

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
            {weatherCardsData && (
              <WeatherCardsList weatherData={weatherCardsData} />
            )}
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
