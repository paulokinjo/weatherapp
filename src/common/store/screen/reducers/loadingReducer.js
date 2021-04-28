import * as types from '../screenTypes';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

export default loadingReducer;
