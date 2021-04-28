import * as actions from './scaleComponentActions';
import * as types from '../scaleComponentTypes';

describe('[Actions] Scale', () => {
  it('creates an action to set the scale', () => {
    const scale = 'celsius';
    const expectedAction = { type: types.SET_SCALE, scale };
    expect(actions.setScale(scale)).toEqual(expectedAction);
  });
});
