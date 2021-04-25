import { render, screen } from '@testing-library/react';

import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);

  describe('Layout', () => {
    it('should render properly', () => {
      expect(app).toMatchSnapshot();
    });
  });
});
