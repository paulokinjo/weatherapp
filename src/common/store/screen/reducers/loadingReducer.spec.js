import * as actions from '../actions/loadingActions';

import loadingReducer from './loadingReducer';

describe('[Reducers] Loading', () => {
  it('should set the loading', () => {
    const isLoading = true;

    expect(loadingReducer(undefined, actions.setLoading(isLoading))).toEqual(
      isLoading
    );
  });
});
