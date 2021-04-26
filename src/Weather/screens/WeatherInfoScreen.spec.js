import { Provider } from 'react-redux';
import React from 'react';
import WeatherInfoScreen from './WeatherInfoScreen';
import { render } from '@testing-library/react';
import store from '../../store';

const setup = () => {
  return render(
    <Provider store={store}>
      <WeatherInfoScreen />
    </Provider>
  );
};

describe('WeatherInfoScreen', () => {
  describe('Layout', () => {
    it('displays Celsius radio button', () => {
      const { queryByText } = setup();
      const celsiusRadioButton = queryByText('Celsius');
      expect(celsiusRadioButton).toBeInTheDocument();
    });

    it('displays Fahrenheit radio button', () => {
      const { queryByText } = setup();
      const fahrenheitRadioButton = queryByText('Fahrenheit');
      expect(fahrenheitRadioButton).toBeInTheDocument();
    });
  });
});
