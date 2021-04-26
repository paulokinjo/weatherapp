import * as redux from 'react-redux';

import { render, waitFor } from '@testing-library/react';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import axios from 'axios';
import { getWeather } from './store/weather/weatherActions';
import store from './store';

const setup = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const mockAsyncDelayed = () => {
  return jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: [],
        });
      }, 500);
    });
  });
};

describe('App', () => {
  describe('Layout', () => {
    it('should render LoadingScreen when fetching data', () => {
      axios.get = mockAsyncDelayed();
      const { queryByText } = setup();
      expect(queryByText('Loading...')).toBeInTheDocument();
    });

    it('should render WeatherInfoScreen after data is fetched', async () => {
      axios.get = jest.fn().mockResolvedValueOnce({ data: [] });
      const { queryByText } = setup();
      await waitFor(() => expect(queryByText('Celsius')).toBeInTheDocument());
    });
  });

  describe('Lifecycle', () => {
    it('should dispatch an action to get weather data', () => {
      axios.get = jest.fn().mockResolvedValueOnce({ data: [] });
      const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
      const mockDispatchFn = jest.fn();
      useDispatchSpy.mockReturnValue(mockDispatchFn);

      setup();

      expect(mockDispatchFn).toHaveBeenCalledTimes(1);

      //teardown
      useDispatchSpy.mockClear();
    });
  });
});
