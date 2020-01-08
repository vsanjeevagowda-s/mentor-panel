import { combineReducers } from 'redux';
import mentor from './mentor.reducers';

const reducerFuns = () => {
  
  return {
    mentor,
  }
}

export default combineReducers(reducerFuns());