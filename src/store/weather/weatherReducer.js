import * as types from './weatherTypes';

const initialState = {
  data: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WEATHER:
      return {
        data: ['1', '2', '3', '4', '5'],
      };
    default:
      return state;
  }
};

export default weatherReducer;
