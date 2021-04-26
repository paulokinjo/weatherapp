import * as types from './screenTypes';

export const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    isLoading,
  };
};
