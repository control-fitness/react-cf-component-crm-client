import { setValue } from './setValue';
import { fetchList } from './list';

const search = (dispatch, page, value, property) => {
  dispatch(setValue(value, property));
  fetchList(value, page, dispatch);
};

export default search;
