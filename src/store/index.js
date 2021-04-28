import { applyMiddleware, combineReducers, createStore } from 'redux';

import commonRootReducer from '../common/store/commonRootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import scaleRootReducer from '../scale/store/scaleRootReducer';
import thunk from 'redux-thunk';
import weatherRootReducer from '../weather/store/weatherRootReducer';

const rootReducer = combineReducers({
  weather: weatherRootReducer,
  common: commonRootReducer,
  scale: scaleRootReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
