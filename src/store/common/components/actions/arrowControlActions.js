import * as types from './componentTypes';

export const hideNextArrow = () => {
  return {
    type: types.HIDE_NEXT_ARROW,
    isVisible: false,
  };
};

export const showNextArrow = () => {
  return {
    type: types.SHOW_NEXT_ARROW,
    isVisible: true,
  };
};

export const hidePrevArrow = () => {
  return {
    type: types.HIDE_PREV_ARROW,
    isVisible: false,
  };
};

export const showPrevArrow = () => {
  return {
    type: types.SHOW_PREV_ARROW,
    isVisible: true,
  };
};

export const setCurrentPage = (pageNum) => {
  return (dispatch) => {
    if (pageNum > 0) {
      dispatch(showPrevArrow());
    } else {
      dispatch(hidePrevArrow());
    }

    dispatch({
      type: types.SET_CURRENT_PAGE,
      pageNum,
    });
  };
};
