import * as arrowControlActions from '../common/components/actions/arrowControlActions';
import * as loadingActions from '../common/screen/actions/loadingActions';

import { GET_WEATHER } from './weatherTypes';
import axios from 'axios';

export const getWeather = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingActions.setLoading(true));

      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${process.env.REACT_APP_CITY}&APPID=${process.env.REACT_APP_API_KEY}&cnt=40`
      );

      dispatch({
        type: GET_WEATHER,
        weatherData: res.data,
      });

      dispatch(arrowControlActions.hidePrevArrow());
      dispatch(arrowControlActions.showNextArrow());

      dispatch(loadingActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
