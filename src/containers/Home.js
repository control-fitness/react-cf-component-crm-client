import debounce from 'lodash/debounce';
import { connect } from '../redux-custom';
import { openModal } from '../actions/openModal';
import { closeModal } from '../actions/closeModal';
import create from '../actions/create';
import search from '../actions/search';
import { setValue } from '../actions/setValue';
import { fetchList } from '../actions/list';
import Home from '../components/Home';

const mapStateToProps = state => ({
  query: state.crmClientApi.query,
  loading: state.crmClientApi.loading,
  page: state.crmClientApi.page,
  list: state.crmClientApi.list,
  open: state.crmClientModal.open,
  firstNameErrorMessage: state.crmClientModal.firstNameErrorMessage,
  lastNameErrorMessage: state.crmClientModal.lastNameErrorMessage,
  sexErrorMessage: state.crmClientModal.sexErrorMessage,
  updating: state.crmClientModal.updating,
  firstName: state.crmClientClient.client.firstName,
  lastName: state.crmClientClient.client.lastName,
  sex: state.crmClientClient.client.sex,

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
  fetchList: (query, page) => {
    fetchList(query, page, dispatch);
  },
  search: (page, value, property) => {
    search(dispatch, page, value, property);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
