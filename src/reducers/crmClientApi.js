import { RECEIVE_LIST } from '../actions/list';
import { SET_VALUE } from '../actions/setValue';

const crmClientApi = (state = {
  list: {},
  query: '',
  page: 1,
  loading: true,
}, action) => {
  switch (action.type) {
    case SET_VALUE:
      return Object.assign({}, state, {
        [action.property]: action.value,
      });
    case RECEIVE_LIST:
      return Object.assign({}, state, {
        list: action.data,
        page: action.page,
        loading: false,
      });
    default:
      return state;
  }
};

export default crmClientApi;
