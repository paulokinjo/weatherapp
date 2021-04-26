import * as types from '../actions/componentTypes';

const initialState = {
  prevArrow: false,
  nextArrow: false,
  currentPage: 1,
  totalPages: 5,
  numItemToShow: 3,
};

const arrowControlReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HIDE_NEXT_ARROW:
      return {
        ...state,
        nextArrow: action.isVisible,
      };

    case types.SHOW_NEXT_ARROW:
      return {
        ...state,
        nextArrow: action.isVisible,
      };

    case types.HIDE_PREV_ARROW:
      return {
        ...state,
        prevArrow: action.isVisible,
      };

    case types.SHOW_PREV_ARROW:
      return {
        ...state,
        prevArrow: action.isVisible,
      };

    case types.SET_CURRENT_PAGE:
      const isLastPage =
        action.pageNum + state.numItemToShow === state.totalPages;
      return {
        ...state,
        currentPage: action.pageNum,
        nextArrow: !isLastPage,
      };

    default:
      return state;
  }
};

export default arrowControlReducer;
