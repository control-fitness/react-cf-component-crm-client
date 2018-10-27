import { connect } from 'react-redux';
import { openModal } from '../actions/openModal';
import { closeModal } from '../actions/closeModal';
import create from '../actions/create';
import { setValue } from '../actions/setValue';
import { fetchList } from '../actions/list';
import Home from '../components/Home';

const mapStateToProps = state => ({
  loading: state.api.loading,
  page: state.api.page,
  list: state.api.list,
  open: state.modal.open,
  updating: state.modal.updating,
  firstName: state.client.client.firstName,
  lastName: state.client.client.lastName,
  sex: state.client.client.sex,
  firstNameErrorMessage: state.modal.firstNameErrorMessage,
  lastNameErrorMessage: state.modal.lastNameErrorMessage,
  sexErrorMessage: state.modal.sexErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    dispatch(closeModal());
  },
  openModal: () => {
    dispatch(openModal());
  },
  create: (client) => {
    create(dispatch, client);
  },
  setValue: (value, property) => {
    dispatch(setValue(value, property));
  },
  fetchList: (page) => {
    fetchList(page, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
