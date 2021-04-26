import * as actions from './arrowControlActions';
import * as types from './componentTypes';

describe('[Actions] ArrowControl', () => {
  it('creates an action to hide next arrow', () => {
    const isVisible = false;
    const expectedAction = { type: types.HIDE_NEXT_ARROW, isVisible };
    expect(actions.hideNextArrow()).toEqual(expectedAction);
  });

  it('creates an action to show next arrow', () => {
    const isVisible = true;
    const expectedAction = { type: types.SHOW_NEXT_ARROW, isVisible };
    expect(actions.showNextArrow()).toEqual(expectedAction);
  });

  it('creates an action to hide prev arrow', () => {
    const isVisible = false;
    const expectedAction = { type: types.HIDE_PREV_ARROW, isVisible };
    expect(actions.hidePrevArrow()).toEqual(expectedAction);
  });

  it('creates an action to show prev arrow', () => {
    const isVisible = true;
    const expectedAction = { type: types.SHOW_PREV_ARROW, isVisible };
    expect(actions.showPrevArrow()).toEqual(expectedAction);
  });

  it('dispatches an action to hide the previous arrow', () => {
    const mockDispatch = jest.fn();
    const pageNum = 0;
    actions.setCurrentPage(pageNum)(mockDispatch);
    const expectedAction = { type: types.HIDE_PREV_ARROW, isVisible: false };
    expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  it('dispatches an action to show the previous arrow', () => {
    const mockDispatch = jest.fn();
    const pageNum = 1;
    actions.setCurrentPage(pageNum)(mockDispatch);
    const expectedAction = { type: types.SHOW_PREV_ARROW, isVisible: true };
    expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  it('dispatches an action to set the current page', () => {
    const mockDispatch = jest.fn();
    const pageNum = 3;
    actions.setCurrentPage(pageNum)(mockDispatch);
    const expectedAction = { type: types.SET_CURRENT_PAGE, pageNum };
    expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedAction);
  });
});
