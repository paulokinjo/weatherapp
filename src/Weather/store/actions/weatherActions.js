import * as arrowControlActions from '../../../common/store/components/actions/arrowControlActions';
import * as loadingActions from '../../../common/store/screen/actions/loadingActions';

import {
  FILTER_CARDS_BY_DATE,
  GET_WEATHER,
  SELECT_CARD,
  SET_ERROR,
} from '../weatherTypes';

import { SET_ALERT } from '../../../common/store/components/componentTypes';
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
        cards.push(data[closestIndex]);

        currentDate = dateKeys[i];
        closestDate = Math.abs(currentDate.getHours() - now.getHours());
        closestIndex = i;
      }
    }

    cards.push(data[closestIndex]);

    dispatch(arrowControlActions.setTotalCards(cards.length));

    dispatch({
      type: FILTER_CARDS_BY_DATE,
      cards: {
        all: cards,
        selected: [],
      },
    });
  };
};

export const selectCard = (selected) => {
  return (dispatch) => {
    dispatch({ type: SELECT_CARD, selected });
  };
};

export const getWeather = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingActions.setLoading(true));

      const request = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q='
          .concat(process.env.REACT_APP_CITY)
          .concat('&APPID=')
          .concat(process.env.REACT_APP_API_KEY)
          .concat('&cnt=40')
      );

      dispatch({ type: GET_WEATHER, weatherData: request.data.list });

      dispatch(arrowControlActions.hidePrevArrow());
      dispatch(arrowControlActions.showNextArrow());
    } catch (error) {
      dispatch({ type: SET_ERROR, error: error.message });
      dispatch({ type: SET_ALERT, message: error.message });
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
