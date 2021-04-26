import * as types from '../actions/componentTypes';

import arrowControlReducer from './arrowControlReducer';

describe('[Reducers] ArrowControl', () => {
  const arrow = {
    prevArrow: false,
    nextArrow: false,
    currentPage: 1,
    totalPages: 5,
    numItemToShow: 3,
  };

  it('should hide next arrow', () => {
    const isVisible = false;

    expect(
      arrowControlReducer(undefined, { type: types.HIDE_NEXT_ARROW, isVisible })
    ).toEqual({ ...arrow, nextArrow: isVisible });
  });

  it('should show next arrow', () => {
    const isVisible = true;

    expect(
      arrowControlReducer(undefined, { type: types.SHOW_NEXT_ARROW, isVisible })
    ).toEqual({ ...arrow, nextArrow: isVisible });
  });

  it('should hide prev arrow', () => {
    const isVisible = false;

    expect(
      arrowControlReducer(undefined, { type: types.HIDE_PREV_ARROW, isVisible })
    ).toEqual({ ...arrow, prevArrow: isVisible });
  });

  it('should show prev arrow', () => {
    const isVisible = true;

    expect(
      arrowControlReducer(undefined, { type: types.SHOW_PREV_ARROW, isVisible })
    ).toEqual({ ...arrow, prevArrow: isVisible });
  });

  it('should set to the last page and hide the next button', () => {
    const pageNum = 2;

    expect(
      arrowControlReducer(undefined, { type: types.SET_CURRENT_PAGE, pageNum })
    ).toEqual({ ...arrow, currentPage: pageNum, nextArrow: false });
  });

  it('should set to the first page and show the next button', () => {
    const pageNum = 1;

    expect(
      arrowControlReducer(undefined, { type: types.SET_CURRENT_PAGE, pageNum })
    ).toEqual({ ...arrow, currentPage: pageNum, nextArrow: true });
  });
});
