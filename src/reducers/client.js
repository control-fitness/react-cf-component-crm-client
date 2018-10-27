import { SET_VALUE } from '../actions/setValue';

const client = (state = { client: {} }, action) => {
  switch (action.type) {
    case SET_VALUE:
      return Object.assign({}, state, {
        client: Object.assign({}, state.client, { [action.property]: action.value }),
      });
    default:
      return state;
  }
};

export default client;
