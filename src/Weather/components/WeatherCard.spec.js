import * as constants from '../../scale/utils/constants';

import React from 'react';
import WeatherCard from './WeatherCard';
import { getScale } from '../../scale/utils/convertions';
import { render } from '@testing-library/react';

const setup = (props) => {
  return render(<WeatherCard {...props} />);
};

describe('WeatherCard', () => {
  const weatherData = {
    dt: 1,
    weather: [{ icon: 'testIcon', main: 'Rain', description: 'Raining' }],
    dt_txt: '2020-04-28 06:00:00',
    main: { temp: 300, feels_like: 300, humidity: 97 },
    wind: { speed: 45 },
  };

  describe('Layout', () => {
    it('should render a card', () => {
      const { container } = setup({ info: weatherData });

      const card = container.querySelector('.MuiCard-root');

      expect(card).toBeInTheDocument();
    });

    it('should render an image', () => {
      const { container } = setup({ info: weatherData });

      const cardMedia = container.querySelector('.MuiCardMedia-root');

      expect(cardMedia.style['background-image']).toContain(
        weatherData.weather[0].icon
      );
    });

    it('should print the weather information', () => {
      const expectedTemplate = `${weatherData.weather[0].main} (${weatherData.weather[0].description})`;
      const { queryByText } = setup({ info: weatherData });

      const weatherInfo = queryByText(expectedTemplate);

      expect(weatherInfo).toBeInTheDocument();
    });

    it('should print the temperature', () => {
      const { queryByText } = setup({
        info: weatherData,
        scale: constants.CELSIUS,
      });

      const temperature = queryByText('27');

      expect(temperature).toBeInTheDocument();
    });

    it('should print feels like information', () => {
      const { queryByText } = setup({
        info: weatherData,
        scale: constants.FAHRENHEIT,
      });

      const feelsLike = queryByText(`Feels like: 80`);

      expect(feelsLike).toBeInTheDocument();
    });

    it('should print the wind speed information', () => {
      const { queryByText } = setup({
        info: weatherData,
        scale: constants.FAHRENHEIT,
      });

      const windInfo = queryByText(`Wind ${weatherData.wind.speed} m/s`);

      expect(windInfo).toBeInTheDocument();
    });

    it('should print the card date', () => {
      const { queryByText } = setup({ info: weatherData });

      const dateInfo = queryByText(`28 Apr 2020`);

      expect(dateInfo).toBeInTheDocument();
    });

    it('should print humidity information', () => {
      const { queryByText } = setup({ info: weatherData });

      const humidity = queryByText(`${weatherData.main.humidity}%`);

      expect(humidity).toBeInTheDocument();
    });
  });
});
