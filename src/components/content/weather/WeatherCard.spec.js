import React from 'react';
import WeatherCard from './WeatherCard';
import { shallow } from 'enzyme';

describe('WeatherCard', () => {
  const weatherCard = shallow(<WeatherCard />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(weatherCard).toMatchSnapshot();
    });
  });
});
