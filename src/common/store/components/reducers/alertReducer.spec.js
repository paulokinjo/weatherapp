import * as componentTypes from '../componentTypes';

import alertReducer from './alertReducer';

describe('[Reducers] Alert', () => {
  it('should set the alert ', () => {
    const message = 'simple message';

    expect(
      alertReducer(undefined, {
        type: componentTypes.SET_ALERT,
        message,
      })
    ).toEqual({ message, title: 'Error' });
  });
});
