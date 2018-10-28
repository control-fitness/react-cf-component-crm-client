import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import I18n from 'react-cf-helper-i18n';
import MessageContent from 'react-cf-component-message-content';
import GenderHelper from './GenderHelper';

const List = function Client(props) {
  const {
    clients,
    page,
    fetchList,
    query,
  } = props;

  const body = function body() {
    const rows = clients.nodes.map(client => (
      <Table.Row key={client.id}>
        <Table.Cell>
          {`${client.firstName} ${client.lastName}`}
        </Table.Cell>
        <Table.Cell>
          {GenderHelper(client.sex)}
        </Table.Cell>
        <Table.Cell>
          {client.email}
        </Table.Cell>
      </Table.Row>
    ));
    return (
      <Table.Body>{rows}</Table.Body>
    );
  };

  return (
    <div>
      {clients.totalEntries && clients.totalEntries > 0 && (
      <div>
        <Table basic size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                {I18n.t('crm.client.form.firstName')}
              </Table.HeaderCell>
              <Table.HeaderCell>
                {I18n.t('crm.client.form.sex')}
              </Table.HeaderCell>
              <Table.HeaderCell>
                {I18n.t('crm.client.form.email')}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {body()}
        </Table>
        <Pagination
          activePage={page}
          onPageChange={(e, item) => fetchList(query, item.activePage)}
          totalPages={clients.totalPages}
        />
      </div>

      )}
      {clients && clients.totalEntries === 0 && (
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
