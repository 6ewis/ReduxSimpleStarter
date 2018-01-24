import { combineReducers } from 'redux';
import showDataReducer from './showData';

const rootReducer = combineReducers({
  data: showDataReducer,
});

export default rootReducer;
