import ArrowControl from './ArrowControl';
import React from 'react';
import { render } from '@testing-library/react';

const setup = (props) => {
  return render(<ArrowControl {...props} />);
};
describe('ArrowControl', () => {
  describe('Layout', () => {
    it('should render if visible', () => {
      const { container } = setup({
        isVisible: true,
        className: 'slick-arrow',
      });
      expect(container.querySelector('.slick-arrow')).toBeInTheDocument();
    });

    it('should not render if visible is set to false', () => {
      const { container } = setup({
        isVisible: false,
        className: 'slick-arrow',
      });
      expect(container.querySelector('.slick-arrow')).not.toBeInTheDocument();
    });
  });
});
