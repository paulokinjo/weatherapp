import React from 'react';
import WeatherInfoScreen from './WeatherInfoScreen';
import { render } from '@testing-library/react';

describe('WeatherInfoScreen', () => {
  describe('Layout', () => {
    it('should render properly', () => {});

    it('displays Celsius radio button', () => {
      const { queryByText } = render(<WeatherInfoScreen />);
      const celsiusRadioButton = queryByText('Celsius');
      expect(celsiusRadioButton).toBeInTheDocument();
    });

    it('displays Fahrenheit radio button', () => {
      const { queryByText } = render(<WeatherInfoScreen />);
      const fahrenheitRadioButton = queryByText('Fahrenheit');
      expect(fahrenheitRadioButton).toBeInTheDocument();
    });
  });
});
