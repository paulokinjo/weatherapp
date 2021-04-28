import alertReducer from './components/reducers/alertReducer';
import arrowControlReducer from './components/reducers/arrowControlReducer';
import { combineReducers } from 'redux';
import loadingReducer from './screen/reducers/loadingReducer';

const commonRootReducer = combineReducers({
  arrowControls: arrowControlReducer,
  loadingPage: loadingReducer,
  alertMessage: alertReducer,
});

export default commonRootReducer;
