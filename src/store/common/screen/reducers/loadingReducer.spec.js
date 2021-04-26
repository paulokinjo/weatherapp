import * as types from '../actions/screenTypes';

import loadingReducer from './loadingReducer';

describe('[Reducers] Loading', () => {
  it('should set the loading', () => {
    const isLoading = true;

    expect(
      loadingReducer(undefined, { type: types.SET_LOADING, isLoading })
    ).toEqual(isLoading);
  });
});
