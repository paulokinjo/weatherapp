import { GET_WEATHER } from '../store/weatherTypes';
import { Provider } from 'react-redux';
import React from 'react';
import WeatherInfoScreen from './WeatherInfoScreen';
import { render } from '@testing-library/react';
import store from '../../store';

const setup = (mockStore) => {
  return render(
    <Provider store={mockStore}>
      <WeatherInfoScreen />
    </Provider>
  );
};

describe('WeatherInfoScreen', () => {
  const mockStore = { ...store };
  describe('Layout', () => {
    beforeEach(() => {
      mockStore.dispatch({
        type: GET_WEATHER,
        weatherData: [
          {
            dt: 1619589603,
            main: {
              temp: 277.17,
              feels_like: 277.17,
              temp_min: 277.17,
              temp_max: 280.49,
              humidity: 87,
            },
            weather: [
              { main: 'Clouds', description: 'broken clouds', icon: '04d' },
            ],
            wind: { speed: 1.01 },
            dt_txt: '2021-05-01 06:00:00',
          },
        ],
      });
    });
    it('displays Celsius radio button', () => {
      const { queryByText } = setup(mockStore);
      const celsiusRadioButton = queryByText('Celsius');
      expect(celsiusRadioButton).toBeInTheDocument();
    });

    it('displays Fahrenheit radio button', () => {
      const { queryByText } = setup(mockStore);
      const fahrenheitRadioButton = queryByText('Fahrenheit');
      expect(fahrenheitRadioButton).toBeInTheDocument();
    });
  });
});
