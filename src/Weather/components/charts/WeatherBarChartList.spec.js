import { Provider } from 'react-redux';
import React from 'react';
import WeatherBarChartList from './WeatherBarChartList';
import { render } from '@testing-library/react';
import store from '../../../store';

const setup = (props) => {
  return render(
    <Provider store={store}>
      <WeatherBarChartList {...props} />
    </Provider>
  );
};

describe('WeatherBarChart', () => {
  const weatherData = {
    dt: 1,
    weather: [{ icon: 'testIcon', main: 'Rain' }],
    dt_txt: '2020-04-28 06:00:00',
    main: { temp: 300 },
  };

  describe('Layout', () => {
    it('should list one bar if just one provided', () => {
      const { container } = setup({
        weatherData: [weatherData],
      });

      const bar = container.querySelectorAll('.MuiPaper-root');

      expect(bar.length).toBe(1);
    });

    it('should list 8 bars if 8 are provided', () => {
      const data = [];

      for (let i = 0; i < 8; i++) data.push({ ...weatherData, dt: i });

      const { container } = setup({ weatherData: data });

      const bar = container.querySelectorAll('.MuiPaper-root');

      expect(bar.length).toBe(8);
    });

    it('should not list any bar if none is provided', () => {
      const { container } = setup({ weatherData: [] });

      const bar = container.querySelectorAll('.MuiPaper-root');

      expect(bar.length).toBe(0);
    });
  });
});
