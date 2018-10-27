
import { UPDATING } from '../actions/updating';
import { OPEN_MODAL } from '../actions/openModal';
import { CLOSE_MODAL } from '../actions/closeModal';
import { SET_ERROR_MESSAGE } from '../actions/setErrorMessage';

const modal = (state = {
  open: false,
  updating: false,
  firstNameErrorMessage: '',
  lastNameErrorMessage: '',
  sexErrorMessage: '',
}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        open: action.open,
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        open: action.open,
      });
    case UPDATING:
      return Object.assign({}, state, {
        updating: action.value,
      });
    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        [`${action.property}ErrorMessage`]: action.message,
      });
    default:
      return state;
  }
};

export default modal;
