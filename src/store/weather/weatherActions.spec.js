import * as actions from './weatherActions';
import * as arrowControlActions from '../common/components/actions/arrowControlActions';
import * as loadingActions from '../common/screen/actions/loadingActions';
import * as types from './weatherTypes';

import axios from 'axios';

jest.useFakeTimers();
describe('[Actions] Weather', () => {
  const weatherData = { data: [] };
  const mockDispatch = jest.fn();

  beforeEach(() => {
    axios.get = jest.fn().mockReturnValueOnce({ data: weatherData });
    actions.getWeather()(mockDispatch);
  });

  it('should dispatch an action to change loading state to true', () => {
    const expectedAction = loadingActions.setLoading(true);
    expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  it('should dispatch an action the get the weather', async () => {
    const expectedAction = { type: types.GET_WEATHER, weatherData };
    expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedAction);
  });

  it('should dispatch an action to hide the previous arrow', async () => {
    const expectedAction = arrowControlActions.hidePrevArrow(false);
    expect(mockDispatch).toHaveBeenNthCalledWith(3, expectedAction);
  });

  it('should dispatch an action to show the next arrow', async () => {
    const expectedAction = arrowControlActions.showNextArrow(true);
    expect(mockDispatch).toHaveBeenNthCalledWith(4, expectedAction);
  });

  it('should dispatch an action to change loading state to false', async () => {
    const expectedAction = loadingActions.setLoading(false);
    expect(mockDispatch).toHaveBeenNthCalledWith(5, expectedAction);
  });
});
