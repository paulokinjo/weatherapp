import * as types from '../scaleComponentTypes';

import { FAHRENHEIT } from '../../../utils/constants';

const scaleReducer = (state = FAHRENHEIT, action) => {
  switch (action.type) {
    case types.SET_SCALE:
      return action.scale;

    default:
      return state;
  }
};

export default scaleReducer;
