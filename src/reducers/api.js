import { RECEIVE_LIST } from '../actions/list';

const api = (state = { list: {}, page: 1, loading: true }, action) => {
  switch (action.type) {
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

export default api;
