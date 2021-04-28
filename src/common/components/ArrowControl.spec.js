import { fireEvent, render } from '@testing-library/react';

import ArrowControl from './ArrowControl';
import React from 'react';

const setup = (props) => {
  return render(<ArrowControl {...props} />);
};

describe('ArrowControl', () => {
  const className = 'slick-arrow';

  describe('Layout', () => {
    it('should render if visible', () => {
      const { container } = setup({
        isVisible: true,
        className,
      });
      expect(
        container.querySelector('.'.concat(className))
      ).toBeInTheDocument();
    });

    it('should not render if visible is set to false', () => {
      const { container } = setup({
        isVisible: false,
        className,
      });
      expect(container.querySelector(className)).not.toBeInTheDocument();
    });
  });

  describe('Lifecycle', () => {
    it('should raise an event if clicked', () => {
      const mockClick = jest.fn();
      const { container } = setup({
        isVisible: true,
        className,
        onClick: mockClick,
      });

      const component = container.querySelector('.'.concat(className));

      fireEvent.click(component);

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});
