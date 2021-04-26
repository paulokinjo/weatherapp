import React from 'react';
import ScaleRadioButtons from './ScaleRadioButtons';
import { render } from '@testing-library/react';

describe('ScaleRadioButtons', () => {
  describe('Lifecycle', () => {
    it('should initialize Fahrenheit as default value', () => {
      const { queryByLabelText } = render(<ScaleRadioButtons />);
      const fahrenheitRadioButton = queryByLabelText('Fahrenheit');

      expect(fahrenheitRadioButton.checked).toBe(true);
    });

    it('should have Celsius as unchecked', () => {
      const { queryByLabelText } = render(<ScaleRadioButtons />);
      const celsiusRadioButton = queryByLabelText('Celsius');

      expect(celsiusRadioButton.checked).toBe(false);
    });
  });
});
