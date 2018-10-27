
import { combineReducers } from 'redux';
import crmClientApi from './crmClientApi';
import crmClientClient from './crmClientClient';
import crmClientModal from './crmClientModal';

export default combineReducers({
  crmClientApi,
  crmClientClient,
  crmClientModal,
});
