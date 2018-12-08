import { combineReducers } from 'redux';
import userReducer from '#/reducers/user';

export default (state, action) =>
  combineReducers({
    user: userReducer,
  });
