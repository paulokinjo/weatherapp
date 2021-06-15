import * as actions from '../actions/weatherActions';
import * as arrowControlActions from '../../../common/store/components/actions/arrowControlActions';
import * as loadingActions from '../../../common/store/screen/actions/loadingActions';
import * as types from '../weatherTypes';

import axios from 'axios';

jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2021-04-20 12:00:00').getTime());

const request = {
  data: {
    list: [
      { dt_txt: '2021-04-20 00:00:00' },
      { dt_txt: '2021-04-20 03:00:00' },
      { dt_txt: '2021-04-20 06:00:00' },
      { dt_txt: '2021-04-20 09:00:00' },
      { dt_txt: '2021-04-20 12:00:00' },

      { dt_txt: '2021-04-21 00:00:00' },
      { dt_txt: '2021-04-21 03:00:00' },
      { dt_txt: '2021-04-21 06:00:00' },
      { dt_txt: '2021-04-21 09:00:00' },
      { dt_txt: '2021-04-21 12:00:00' },
    ],
  },
};

describe('[Actions] Weather', () => {
  const mockDispatch = jest.fn();

  describe('getWeather', () => {
    beforeEach(() => {
      axios.get = jest.fn().mockReturnValueOnce(request);
      actions.getWeather()(mockDispatch);
    });

    it('should dispatch an action to change loading state to true', () => {
      const expectedAction = loadingActions.setLoading(true);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedAction);
    });

    it('should dispatch an action the get the weather', async () => {
      const expectedAction = {
        type: types.GET_WEATHER,
        weatherData: request.data.list,
      };
      expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedAction);
    });

    it('should dispatch an action to hide the previous arrow', async () => {
      const expectedAction = arrowControlActions.hidePrevArrow(false);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch an action to show the next arrow', async () => {
      const expectedAction = arrowControlActions.showNextArrow(true);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch an action to change loading state to false', async () => {
      const expectedAction = loadingActions.setLoading(false);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch error if it fails fetching data', async () => {
      const errorMessage = 'Network error';
      const mockDispatchFail = jest.fn();
      axios.get = jest.fn().mockRejectedValue({
        message: errorMessage,
      });

      await actions.getWeather()(mockDispatchFail);

      expect(mockDispatchFail).toHaveBeenNthCalledWith(2, {
        type: types.SET_ERROR,
        error: errorMessage,
      });
    });
  });

  describe('filterCardsByDate', () => {
    beforeEach(() => {
      actions.filterCardsByDate(request.data.list)(mockDispatch);
    });

    it('should dispatch an action to filter the cards data by date', () => {
      const expectedAction = {
        type: types.FILTER_CARDS_BY_DATE,
        cards: {
          all: [
            { dt_txt: '2021-04-20 12:00:00' },
            { dt_txt: '2021-04-21 12:00:00' },
          ],
          selected: [],
        },
      };
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch a card selection action when first load', () => {
      const expectedAction = {
        type: types.SELECT_CARD,
        selected: { dt_txt: '2021-04-20 12:00:00' },
      };
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('selectCard', () => {
    it('should dispatch an action to select a card', () => {
      const expectedAction = { type: types.SELECT_CARD, selected: {} };
      actions.selectCard({})(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  it('creates an action to set error', () => {
    const error = 'error message';
    const expectedAction = { type: types.SET_ERROR, error };

    expect(actions.setError(error)).toEqual(expectedAction);
  });
});
