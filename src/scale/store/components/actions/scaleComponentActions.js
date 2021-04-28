import * as types from '../scaleComponentTypes';

export const setScale = (scale) => {
  return {
    type: types.SET_SCALE,
    scale,
  };
};
