import * as types from '../componentTypes';

import arrowControlReducer from './arrowControlReducer';

describe('[Reducers] ArrowControl', () => {
  const arrow = {
    prevArrow: false,
    nextArrow: true,
    currentCard: 1,
    totalCards: 5,
    totalCardsToShow: 3,
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

  it('should set to the last card and hide the next button', () => {
    const cardNum = 2;

    expect(
      arrowControlReducer(undefined, { type: types.SET_CURRENT_CARD, cardNum })
    ).toEqual({ ...arrow, currentCard: cardNum, nextArrow: false });
  });

  it('should set to the first page and show the next button', () => {
    const cardNum = 1;

    expect(
      arrowControlReducer(undefined, { type: types.SET_CURRENT_CARD, cardNum })
    ).toEqual({ ...arrow, currentCard: cardNum, nextArrow: true });
  });

  it('should set the total cards', () => {
    const totalCards = 6;
    expect(
      arrowControlReducer(undefined, {
        type: types.SET_TOTAL_CARDS,
        totalCards,
      })
    ).toEqual({ ...arrow, totalCards: totalCards });
  });
});
