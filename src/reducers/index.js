
import { combineReducers } from 'redux';
import api from './api';
import client from './client';
import modal from './modal';

export default combineReducers({
  api,
  client,
  modal,
});
