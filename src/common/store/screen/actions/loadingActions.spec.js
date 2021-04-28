import * as actions from './loadingActions';
import * as types from '../screenTypes';

describe('[Actions] Loading', () => {
  it('creates an action to set the loading', () => {
    const isLoading = true;
    const expectedAction = { type: types.SET_LOADING, isLoading };
    expect(actions.setLoading(isLoading)).toEqual(expectedAction);
  });
});
