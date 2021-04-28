import * as types from '../componentTypes';

import { selectCard } from '../../../../weather/store/actions/weatherActions';

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

export const setCurrentCard = (cardNum) => {
  return (dispatch) => {
    if (cardNum > 0) {
      dispatch(showPrevArrow());
    } else {
      dispatch(hidePrevArrow());
    }

    dispatch({
      type: types.SET_CURRENT_CARD,
      cardNum,
    });

    dispatch(selectCard(undefined));
  };
};

export const setTotalCards = (totalCards) => {
  return {
    type: types.SET_TOTAL_CARDS,
    totalCards,
  };
};

export const setTotalCardsToShow = (totalCardsToShow) => {
  return {
    type: types.SET_TOTAL_CARDS_TO_SHOW,
    totalCardsToShow,
  };
};
