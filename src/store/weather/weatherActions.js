import * as arrowControlActions from '../common/components/actions/arrowControlActions';
import * as loadingActions from '../common/screen/actions/loadingActions';

import { FILTER_CARDS_BY_DATE, GET_WEATHER } from './weatherTypes';

import axios from 'axios';

export const filterCardsByDate = (data) => {
  return (dispatch) => {
    const cards = [];
    const now = new Date();

    const dateKeys = data.map((d) => new Date(d.dt_txt));

    let currentDate = dateKeys[0];
    let closestDate = Math.abs(currentDate.getHours() - now.getHours());
    let closestIndex = 0;

    for (let i = 1; i < dateKeys.length; i++) {
      if (dateKeys[i].getDate() === currentDate.getDate()) {
        let distanceToNow = Math.abs(dateKeys[i].getHours() - now.getHours());

        if (closestDate > distanceToNow) {
          closestDate = distanceToNow;
          closestIndex = i;
        }
      } else {
        if (closestIndex !== -1) {
          cards.push(data[closestIndex]);
        }

        currentDate = dateKeys[i];
        closestDate = Math.abs(currentDate.getHours() - now.getHours());
        closestIndex = i;
      }
    }

    if (closestIndex !== -1) {
      cards.push(data[closestIndex]);
    }

    dispatch({ type: FILTER_CARDS_BY_DATE, cards });
  };
};

export const getWeather = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingActions.setLoading(true));

      const request = await axios.get(
        'http://api.openweathermap.org/data/2.5/forecast?q='
          .concat(process.env.REACT_APP_CITY)
          .concat('&APPID=')
          .concat(process.env.REACT_APP_API_KEY)
          .concat('&cnt=40')
      );

      dispatch({ type: GET_WEATHER, weatherData: request.data.list });

      dispatch(arrowControlActions.hidePrevArrow());
      dispatch(arrowControlActions.showNextArrow());

      dispatch(loadingActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
