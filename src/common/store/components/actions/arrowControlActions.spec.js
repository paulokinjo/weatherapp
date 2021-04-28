import * as actions from './arrowControlActions';
import * as types from '../componentTypes';

describe('[Actions] ArrowControl', () => {
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
  });

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
    const cardNum = 0;
    actions.setCurrentCard(cardNum)(mockDispatch);
    const expectedAction = { type: types.HIDE_PREV_ARROW, isVisible: false };
    expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  it('dispatches an action to show the previous arrow', () => {
    const cardNum = 1;
    actions.setCurrentCard(cardNum)(mockDispatch);
    const expectedAction = { type: types.SHOW_PREV_ARROW, isVisible: true };
    expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  describe('setCurrentCard', () => {
    it('dispatches an action to show prevArrow if cardNum greater than 0', () => {
      const cardNum = 3;
      actions.setCurrentCard(cardNum)(mockDispatch);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.showPrevArrow());
    });

    it('dispatches an action to hide prevArrow if cardNum is equal to 0', () => {
      const cardNum = 0;
      actions.setCurrentCard(cardNum)(mockDispatch);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.hidePrevArrow());
    });

    it('dispatches an action to set the current card', () => {
      const cardNum = 3;
      actions.setCurrentCard(cardNum)(mockDispatch);
      const expectedAction = { type: types.SET_CURRENT_CARD, cardNum };
      expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedAction);
    });

    it('dispatches an action to unselect the card', () => {
      const cardNum = 3;
      actions.setCurrentCard(cardNum)(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledTimes(3);
    });
  });

  it('creates an action to set the total cards', () => {
    const totalCards = 6;
    const expectedAction = { type: types.SET_TOTAL_CARDS, totalCards };
    expect(actions.setTotalCards(totalCards)).toEqual(expectedAction);
  });

  it('creates an action to set the total cards to show', () => {
    const totalCardsToShow = 1;
    const expectedAction = {
      type: types.SET_TOTAL_CARDS_TO_SHOW,
      totalCardsToShow,
    };
    expect(actions.setTotalCardsToShow(totalCardsToShow)).toEqual(
      expectedAction
    );
  });
});
