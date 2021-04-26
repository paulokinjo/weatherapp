import { applyMiddleware, combineReducers, createStore } from 'redux';

import arrowControlReducer from './common/components/reducers/arrowControlReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './common/screen/reducers/loadingReducer';
import thunk from 'redux-thunk';
import weatherReducer from './weather/weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  loading: loadingReducer,
  arrow: arrowControlReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
