import { combineReducers } from 'redux';
import mentor from './mentor.reducers';
import signin from './signin.reducers';

const reducerFuns = () => {
  
  return {
    mentor,
    signin
  }
}

export default combineReducers(reducerFuns());