import { combineReducers } from 'redux';
import weatherReducer from './reducers/weatherReducer';

const weatherRootReducer = combineReducers({
  reducer: weatherReducer,
});

export default weatherRootReducer;
