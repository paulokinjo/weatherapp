import { render, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';
import React from 'react';
import WeatherCardsList from './WeatherCardsList';
import { setCurrentCard } from '../../common/store/components/actions/arrowControlActions';
import store from '../../store';

const setup = (mockStore, weatherData) => {
  return render(
    <Provider store={mockStore}>
      <WeatherCardsList weatherData={weatherData} />
    </Provider>
  );
};

const weatherDataTest = [
  {
    dt: 1619589600,
    main: {
      temp: 277.17,
      feels_like: 277.17,
      temp_min: 277.17,
      temp_max: 280.49,
      humidity: 87,
    },
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    wind: { speed: 1.01 },
    dt_txt: '2021-04-28 06:00:00',
  },
  {
    dt: 1619589601,
    main: {
      temp: 277.17,
      feels_like: 277.17,
      temp_min: 277.17,
      temp_max: 280.49,
      humidity: 87,
    },
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    wind: { speed: 1.01 },
    dt_txt: '2021-04-29 06:00:00',
  },
  {
    dt: 1619589602,
    main: {
      temp: 277.17,
      feels_like: 277.17,
      temp_min: 277.17,
      temp_max: 280.49,
      humidity: 87,
    },
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    wind: { speed: 1.01 },
    dt_txt: '2021-04-30 06:00:00',
  },
  {
    dt: 1619589603,
    main: {
      temp: 277.17,
      feels_like: 277.17,
      temp_min: 277.17,
      temp_max: 280.49,
      humidity: 87,
    },
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    wind: { speed: 1.01 },
    dt_txt: '2021-05-01 06:00:00',
  },
  {
    dt: 1619589604,
    main: {
      temp: 277.17,
      feels_like: 277.17,
      temp_min: 277.17,
      temp_max: 280.49,
      humidity: 87,
    },
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    wind: { speed: 1.01 },
    dt_txt: '2021-05-02 06:00:00',
  },
];

describe('WeatherCardsList', () => {
  let mockStore;
  let container;

  beforeEach(() => {
    mockStore = { ...store };
    container = setup(mockStore, weatherDataTest).container;
  });

  describe('Layout', () => {
    it('should hide nextArrow when the list reaches last item', async () => {
      mockStore.dispatch(setCurrentCard(4));

      await waitFor(() =>
        expect(container.querySelector('.slick-next')).not.toBeInTheDocument()
      );
    });

    it('should show nextArrow when not in the last 3 items', async () => {
      mockStore.dispatch(setCurrentCard(1));

      await waitFor(() =>
        expect(container.querySelector('.slick-next')).toBeInTheDocument()
      );
    });

    it('should not show the prevArrow when first render the list', async () => {
      mockStore.dispatch(setCurrentCard(0));

      await waitFor(() =>
        expect(container.querySelector('.slick-prev')).not.toBeInTheDocument()
      );
    });

    it('should show the prevArrow when not in the first 3 items', async () => {
      mockStore.dispatch(setCurrentCard(1));

      await waitFor(() =>
        expect(container.querySelector('.slick-prev')).toBeInTheDocument()
      );
    });
  });
});
