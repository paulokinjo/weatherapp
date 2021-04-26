import {
  fireEvent,
  queryByAttribute,
  render,
  waitFor,
} from '@testing-library/react';

import React from 'react';
import WeatherCardsList from './WeatherCardsList';

describe('WeatherCardsList', () => {
  describe('Layout', () => {
    xit('should hide nextArrow when the list reaches last item', async () => {
      const { getByTestId } = render(<WeatherCardsList />);
      const nextArrow = getByTestId('nextArrow');

      fireEvent.click(nextArrow);
      fireEvent.click(nextArrow);

      await waitFor(() => expect(nextArrow).not.toBeInTheDocument());
    });

    xit('should not show the left prevArrow when first render the list', async () => {
      const { container } = render(<WeatherCardsList />);
      const getById = queryByAttribute.bind(null, 'id');

      const prevArrow = getById(container, 'prevArrow');

      expect(prevArrow).not.toBeInTheDocument();
    });
  });
});
