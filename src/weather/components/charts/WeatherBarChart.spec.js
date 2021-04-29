import * as constants from '../../../scale/utils/constants';

import React from 'react';
import WeatherBarChart from './WeatherBarChart';
import { render } from '@testing-library/react';

const setup = (props) => {
  return render(<WeatherBarChart {...props} />);
};

describe('WeatherBarChart', () => {
  const setupData = {
    weatherData: {
      weather: [{ icon: 'testIcon', main: 'Rain' }],
      dt_txt: '2020-04-28 06:00:00',
      main: { temp: 300 },
    },
    scale: constants.CELSIUS,
  };

  describe('Layout', () => {
    it('should render a paper component', () => {
      const { container } = setup(setupData);

      const paper = container.querySelector('.MuiPaper-root');

      expect(paper).toBeInTheDocument();
    });

    it('should print the temperature in celsius if scale is celsius', () => {
      const { queryByText } = setup(setupData);

      const temperatureInCelsius = queryByText('27');

      expect(temperatureInCelsius).toBeInTheDocument();
    });

    it('should print the temperature in fahrenheit if scale is fahrenheit', () => {
      const { queryByText } = setup({
        ...setupData,
        scale: constants.FAHRENHEIT,
      });

      const temperatureInFahrenheit = queryByText('80');

      expect(temperatureInFahrenheit).toBeInTheDocument();
    });

    it('should print the weather time', () => {
      const { queryByText } = setup(setupData);

      const barTime = queryByText('06:00:00');

      expect(barTime).toBeInTheDocument();
    });

    it('should have an image', () => {
      const { container } = setup(setupData);

      const img = container.querySelector('img');

      expect(img).toBeInTheDocument();
    });

    it('should have the image src icon passed by props', () => {
      const { container } = setup(setupData);

      const img = container.querySelector('img');

      expect(img.src).toContain(setupData.weatherData.weather[0].icon);
    });

    it('should print the weather info', () => {
      const { queryByText } = setup(setupData);

      const weatherInfo = queryByText(setupData.weatherData.weather[0].main);

      expect(weatherInfo).toBeInTheDocument();
    });
  });
});
