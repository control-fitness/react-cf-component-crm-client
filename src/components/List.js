import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Pagination, Item, Segment,
} from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import I18n from 'react-cf-helper-i18n';
import MessageContent from 'react-cf-component-message-content';
import { Link } from 'react-router-dom';
import GenderHelper from './GenderHelper';

const List = function List(props) {
  const {
    clients,
    page,
    fetchList,
    query,
  } = props;

  const body = function body() {
    const rows = clients.nodes.map(client => (
      <Grid.Column
        key={client.id}
      >
        <Segment size="small">
          <Item.Group divided unstackable>
            <Item>
              <Item.Image
                size="tiny"
                src={client.avatar}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header
                  as={Link}
                  to={`/crm/clients/${client.id}`}
                >
                  {`${client.firstName} ${client.lastName}`}
                </Item.Header>
                <Item.Meta>{GenderHelper(client.sex)}</Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Grid.Column>
    ));
    return rows;
  };

  const content = clients.totalEntries > 0;

  return (
    <div>
      {content && (
        <div>
          <Grid columns={3}>
            {body()}
          </Grid>
          <Segment basic floated="right">
            <Pagination
              activePage={page}
              onPageChange={(e, item) => fetchList(query, item.activePage)}
              totalPages={clients.totalPages}
            />
          </Segment>
        </div>
      )}
      {!content && (
      <MessageContent
        icon={Cdn.image('information-80-80.svg')}
        title={I18n.t('messages.noRecords.title')}
        message={I18n.t('messages.noRecords.message')}
      />
      )}
    </div>
  );
};

List.defaultProps = {
  clients: {},
};

List.propTypes = {
  clients: PropTypes.shape({
    currentPage: PropTypes.number,
    nextPage: PropTypes.number,
    previousPage: PropTypes.number,
    totalEntries: PropTypes.number,
    totalPages: PropTypes.number,
    nodes: PropTypes.array,
  }),
  query: PropTypes.string.isRequired,
  fetchList: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default List;
