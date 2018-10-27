import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Menu, Header, Button, Icon, Segment,
} from 'semantic-ui-react';
import I18n from 'react-cf-helper-i18n';
import { Link } from 'react-router-dom';
import List from './List';
import New from './New';

const Home = function Home(props) {
  const {
    openModal,
    fetchList,
    list,
    page,
    loading,
  } = props;

  fetchList(page);

  return (
    <Segment basic loading={loading}>
      <Card fluid>
        <New
          {...props}
        />
        <Menu pointing secondary attached="top">
          <Menu.Item
            name="Clientes"
            to="/crm/clients"
            active
          />
          <Menu.Item
            as={Link}
            to="/crm/groups"
            name="Grupos"
          />
        </Menu>
        <Card.Content>
          <Menu borderless compact fluid text>
            <Menu.Item>
              <Header>
                Clientes
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                color="blue"
                floated="right"
                onClick={() => openModal()}
              >
                <Icon name="add" />
                {I18n.t('form.buttons.create')}
              </Button>
            </Menu.Item>
          </Menu>
        </Card.Content>
        <Card.Content>
          <List clients={list} fetchList={fetchList} page={page} />
        </Card.Content>
      </Card>
    </Segment>
  );
};

Home.defaultProps = {
  firstName: '',
  lastName: '',
  sex: '',
  firstNameErrorMessage: '',
  lastNameErrorMessage: '',
  sexErrorMessage: '',
  list: {},
};

Home.propTypes = {
  page: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  fetchList: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  sex: PropTypes.string,
  firstNameErrorMessage: PropTypes.string,
  lastNameErrorMessage: PropTypes.string,
  sexErrorMessage: PropTypes.string,
  list: PropTypes.shape({
    currentPage: PropTypes.number,
    nextPage: PropTypes.number,
    previousPage: PropTypes.number,
    totalEntries: PropTypes.number,
    totalPages: PropTypes.number,
    nodes: PropTypes.array,
  }),
};

export default Home;
