import React from 'react';
import WeatherBarChart from './WeatherBarChart';
import { shallow } from 'enzyme';

describe('WeatherBarChart', () => {
  const weatherBarChart = shallow(<WeatherBarChart />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(weatherBarChart).toMatchSnapshot();
    });
  });
});
