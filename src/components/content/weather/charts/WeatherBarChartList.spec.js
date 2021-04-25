import React from 'react';
import WeatherBarChartList from './WeatherBarChartList';
import { shallow } from 'enzyme';

describe('WeatherBarChart', () => {
  const weatherBarChartList = shallow(<WeatherBarChartList />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(weatherBarChartList).toMatchSnapshot();
    });
  });
});
