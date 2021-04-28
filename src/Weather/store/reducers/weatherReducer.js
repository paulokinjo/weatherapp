import * as types from '../weatherTypes';

const initialState = {
  data: [],
  cards: {
    all: [],
    selected: [],
  },
  error: '',
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

    case types.SELECT_CARD: {
      const cardsAll = state.cards.all;
      for (let i = 0; i < cardsAll.length; i++) {
        cardsAll[i].isSelected = false;
        if (cardsAll[i].dt === action.selected?.dt) {
          cardsAll[i].isSelected = true;
        }
      }

      const allRelatedWeatherInfo = state.data.filter(
        (data) =>
          new Date(data.dt_txt).getDate() ===
          new Date(action.selected?.dt_txt).getDate()
      );
      const cards = { ...state.cards, selected: allRelatedWeatherInfo };

      return {
        ...state,
        cards,
      };
    }

    case types.SET_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
