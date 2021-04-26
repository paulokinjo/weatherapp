import LoadingScreen from './LoadingScreen';
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('LoadingScreen', () => {
  const loadingScreen = shallow(<LoadingScreen />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(loadingScreen).toMatchSnapshot();
    });
  });

  describe('Lifecycle', () => {
    it('should show loading message', () => {
      const { queryByText } = render(<LoadingScreen />);

      const loadingMessage = queryByText('Loading...');

      expect(loadingMessage).toBeInTheDocument();
    });

    it('should show loading icon', () => {
      const { container } = render(<LoadingScreen />);

      const circle = container.querySelector('circle');

      expect(circle).toBeInTheDocument();
    });
  });
});
