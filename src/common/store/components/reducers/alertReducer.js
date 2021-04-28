import { SET_ALERT } from '../componentTypes';

const initialState = {
  title: 'Error',
  message: '',
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default alertReducer;
