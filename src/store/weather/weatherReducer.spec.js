import * as types from './weatherTypes';

import weatherReducer from './weatherReducer';

describe('[Reducers] Weather', () => {
  it('should get weather data', () => {
    const weatherData = { data: ['1', '2', '3', '4', '5'] };

    expect(
      weatherReducer(undefined, { type: types.GET_WEATHER, weatherData })
    ).toEqual(weatherData);
  });
});
