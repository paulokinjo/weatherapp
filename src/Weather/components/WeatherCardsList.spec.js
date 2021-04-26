import {
  fireEvent,
  queryByAttribute,
  render,
  waitFor,
} from '@testing-library/react';

import React from 'react';
import WeatherCardsList from './WeatherCardsList';
import { shallow } from 'enzyme';

describe('WeatherCardsList', () => {
  const weatherCardsList = shallow(<WeatherCardsList />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(weatherCardsList).toMatchSnapshot();
    });

    it('should hide nextArrow when the list reaches last item', async () => {
      const { getByTestId } = render(<WeatherCardsList />);
      const nextArrow = getByTestId('nextArrow');

      fireEvent.click(nextArrow);
      fireEvent.click(nextArrow);

      await waitFor(() => expect(nextArrow).not.toBeInTheDocument());
    });

    it('should not show the left prevArrow when first render the list', async () => {
      const { container } = render(<WeatherCardsList />);
      const getById = queryByAttribute.bind(null, 'id');

      const prevArrow = getById(container, 'prevArrow');

      expect(prevArrow).not.toBeInTheDocument();
    });
  });

  describe('Lifecycle', () => {});
});
