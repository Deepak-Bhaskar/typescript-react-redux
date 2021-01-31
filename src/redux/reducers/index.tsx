import { combineReducers } from 'redux';
import counter from './Counter';

// Wrap all reducers in a container
export default combineReducers({
  counter
});
