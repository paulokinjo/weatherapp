import { FAHRENHEIT } from '../../../utils/constants';

import * as types from '../scaleComponentTypes';

const getInitialState = () =>
  JSON.parse(localStorage.getItem('weatherapp'))?.scale?.components ||
  FAHRENHEIT;

const udpateLocalStorage = (state, scale) => {
  const localState = { ...JSON.parse(localStorage.getItem('weatherapp')) };
  localState.scale.components = scale;
  localStorage.setItem('weatherapp', JSON.stringify(localState));
  console.log(localState.scale);
};

const scaleReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case types.SET_SCALE: {
      udpateLocalStorage(state, action.scale);
      return action.scale;
    }

    default:
      return state;
  }
};

export default scaleReducer;
