import * as types from '../componentTypes';

const initialState = {
  prevArrow: false,
  nextArrow: true,
  currentCard: 1,
  totalCards: 5,
  totalCardsToShow: 3,
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

    case types.SET_CURRENT_CARD:
      const isLastPage =
        action.cardNum + state.totalCardsToShow >= state.totalCards;
      return {
        ...state,
        currentCard: action.cardNum,
        nextArrow: !isLastPage,
      };

    case types.SET_TOTAL_CARDS: {
      return {
        ...state,
        totalCards: action.totalCards,
      };
    }

    default:
      return state;
  }
};

export default arrowControlReducer;
