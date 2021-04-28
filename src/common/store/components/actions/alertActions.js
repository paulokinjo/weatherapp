import { SET_ALERT } from '../componentTypes';

export const setAlert = (message) => {
  return {
    type: SET_ALERT,
    message,
  };
};
