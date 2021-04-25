import React from 'react';
import WeatherCardsList from './WeatherCardsList';
import { shallow } from 'enzyme';

describe('WeatherCardsList', () => {
  const weatherCardsList = shallow(<WeatherCardsList />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(weatherCardsList).toMatchSnapshot();
    });
  });
});
