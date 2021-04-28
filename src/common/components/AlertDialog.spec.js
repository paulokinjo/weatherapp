import { fireEvent, render, waitFor } from '@testing-library/react';

import AlertDialog from './AlertDialog';

const setup = (props) => {
  return render(<AlertDialog {...props} />);
};
describe('Alert', () => {
  it('should render title', () => {
    const title = 'Test Title';
    const { queryByText } = setup({ title });

    const alertComponent = queryByText(title);

    expect(alertComponent).toBeInTheDocument();
  });

  it('should render message', () => {
    const message = 'Test message';
    const { queryByText } = setup({ message });

    const alertComponent = queryByText(message);

    expect(alertComponent).toBeInTheDocument();
  });

  it('should raise an event when closed', () => {
    const mockOnClose = jest.fn();
    const { container } = setup({
      onClose: mockOnClose,
    });

    const alertComponent = container.querySelector('.MuiIconButton-sizeSmall');

    fireEvent.click(alertComponent);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
