import * as componentTypes from '../componentTypes';

import { setAlert } from './alertActions';

describe('[Actions] Alert', () => {
  it('create an action to set the alert', () => {
    const message = 'this is an alert message';
    const expectedAction = { type: componentTypes.SET_ALERT, message };
    expect(setAlert(message)).toEqual(expectedAction);
  });
});
