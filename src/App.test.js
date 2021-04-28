import * as redux from 'react-redux';

import { fireEvent, render, waitFor } from '@testing-library/react';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { SET_ALERT } from './common/store/components/componentTypes';
import axios from 'axios';
import store from './store';

const setup = (mockStore) => {
  return render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
};

const request = {
  data: {
    list: [
      {
        dt: 1619589603,
        main: {
          temp: 277.17,
          feels_like: 277.17,
          temp_min: 277.17,
          temp_max: 280.49,
          humidity: 87,
        },
        weather: [
          { main: 'Clouds', description: 'broken clouds', icon: '04d' },
        ],
        wind: { speed: 1.01 },
        dt_txt: '2021-05-01 06:00:00',
      },
    ],
  },
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
      const { queryByText } = setup(store);
      expect(queryByText('Loading...')).toBeInTheDocument();
    });

    it('should render WeatherInfoScreen after data is fetched', async () => {
      axios.get = jest.fn().mockReturnValueOnce(request);
      const { queryByText } = setup(store);
      await waitFor(() => expect(queryByText('Celsius')).toBeInTheDocument());
    });

    it('should show an alert when fails to fetch data', () => {
      const testAlertMessage = 'TEST ALERT';
      axios.get = jest.fn().mockReturnValueOnce({ data: { list: undefined } });
      store.dispatch({ type: SET_ALERT, message: testAlertMessage });

      const { queryByText } = setup(store);

      expect(queryByText(testAlertMessage)).toBeInTheDocument();
    });
  });

  describe('Lifecycle', () => {
    it('should dispatch an action when closing alert', async () => {
      axios.get = jest.fn().mockReturnValueOnce({ data: { list: undefined } });

      const testAlertMessage = 'TEST ALERT';
      store.dispatch({ type: SET_ALERT, message: testAlertMessage });

      const { queryByText, container } = setup(store);

      const alertCloseIcon = container.querySelector(
        '.MuiSvgIcon-fontSizeSmall'
      );

      axios.get = jest.fn().mockReturnValueOnce(request);

      fireEvent.click(alertCloseIcon);

      await waitFor(() =>
        expect(queryByText(testAlertMessage)).not.toBeInTheDocument()
      );
    });

    it('should dispatch an action to get weather data', () => {
      axios.get = jest.fn().mockReturnValueOnce(request);
      const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
      const mockDispatchFn = jest.fn();
      useDispatchSpy.mockReturnValue(mockDispatchFn);

      setup(store);

      expect(mockDispatchFn).toHaveBeenCalled();

      //teardown
      useDispatchSpy.mockClear();
    });
  });
});
