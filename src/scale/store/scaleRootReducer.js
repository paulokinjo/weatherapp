import { combineReducers } from 'redux';
import scaleComponentReducer from './components/reducers/scaleComponentReducer';

const scaleRootReducer = combineReducers({
  components: scaleComponentReducer,
});

export default scaleRootReducer;
