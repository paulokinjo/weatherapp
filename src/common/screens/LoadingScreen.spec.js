import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingScreen from './LoadingScreen';
import React from 'react';
import { render } from '@testing-library/react';

const setup = () => {
  return render(<LoadingScreen />);
};
describe('LoadingScreen', () => {
  describe('Layout', () => {
    it('should show loading message', () => {
      const { queryByText } = setup();

      const loadingMessage = queryByText('Loading...');

      expect(loadingMessage).toBeInTheDocument();
    });

    it('should show loading spinner icon', () => {
      const { container } = setup();

      const circle = container.querySelector('circle');

      expect(circle).toBeInTheDocument();
    });
  });
});
