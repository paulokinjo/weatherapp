import * as actions from '../actions/scaleComponentActions';

import scaleComponentReducer from './scaleComponentReducer';

describe('[Reducers] Scale', () => {
  it('should set the scale', () => {
    const scale = 'celsius';

    expect(scaleComponentReducer(undefined, actions.setScale(scale))).toEqual(
      scale
    );
  });
});
