import * as types from '../weatherTypes';

import weatherReducer from './weatherReducer';

const initialState = {
  data: [
    { dt: 1, dt_txt: '2021-04-29' },
    { dt: 2, dt_text: '2021-04-30' },
  ],
  cards: {
    all: [
      { dt: 1, dt_txt: '2021-04-29' },
      { dt: 2, dt_text: '2021-04-30' },
    ],
    selected: [],
  },
  error: '',
};

describe('[Reducers] Weather', () => {
  it('should get weather data', () => {
    expect(
      weatherReducer(initialState, {
        type: types.GET_WEATHER,
        weatherData: initialState.data,
      })
    ).toEqual(initialState);
  });

  it('should filter the cards by date', () => {
    expect(
      weatherReducer(initialState, {
        type: types.FILTER_CARDS_BY_DATE,
        cards: initialState.cards,
      })
    ).toEqual(initialState);
  });

  it('should select a card', () => {
    const state = weatherReducer(initialState, {
      type: types.FILTER_CARDS_BY_DATE,
      cards: initialState.cards,
    });

    const expectedState = {
      ...initialState,
      cards: {
        all: [
          { dt: 1, dt_txt: '2021-04-29', isSelected: false },
          { dt: 2, dt_text: '2021-04-30', isSelected: true },
        ],
        selected: [],
      },
    };

    expect(
      weatherReducer(state, {
        type: types.SELECT_CARD,
        selected: { dt: 2, dt_text: '2021-04-30' },
      })
    ).toEqual(expectedState);
  });

  it('should set the error message', () => {
    const errorMessage = 'Simple error message';
    expect(
      weatherReducer(initialState, {
        type: types.SET_ERROR,
        error: errorMessage,
      })
    ).toEqual({ ...initialState, error: errorMessage });
  });
});
