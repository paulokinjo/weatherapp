import * as types from './weatherTypes';

const initialState = {
  data: [],
  cards: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WEATHER:
      return {
        ...state,
        data: action.weatherData,
      };
    case types.FILTER_CARDS_BY_DATE: {
      return {
        ...state,
        cards: action.cards,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
