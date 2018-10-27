import I18n from 'react-cf-helper-i18n';
import is from 'is_js';
import Client, { Graphql } from 'react-cf-graphql-client';
import { closeModal } from './closeModal';
import { setErrorMessage } from './setErrorMessage';
import { updating } from './updating';
import { fetchList } from './list';

const create = (dispatch, client) => {
  if (is.empty(client.firstName)) {
    const message = `${I18n.t('crm.client.form.firstName')} - ${I18n.t('validates.errors.messages.blank')}`;
    dispatch(setErrorMessage('firstName', message));
  } else if (is.empty(client.lastName)) {
    dispatch(setErrorMessage('firstName', ''));
    const message = `${I18n.t('crm.client.form.lastName')} - ${I18n.t('validates.errors.messages.blank')}`;
    dispatch(setErrorMessage('lastName', message));
  } else if (is.empty(client.sex)) {
    dispatch(setErrorMessage('lastName', ''));
    const message = `${I18n.t('crm.client.form.sex')} - ${I18n.t('validates.errors.messages.blank')}`;
    dispatch(setErrorMessage('sex', message));
  } else {
    dispatch(setErrorMessage('sex', ''));
    dispatch(updating(true));
    // make request
    Client.mutate({
      mutation: Graphql`
        mutation CrmClientCreate {
          crmClientCreate(input: {
            firstName: "${client.firstName}"
            lastName: "${client.lastName}"
            sex: ${client.sex}
          }) {
            crmClient {
              firstName
              lastName
              sex
            }
          }
        }
      `,
    }).then(() => {
      dispatch(updating(false));
      dispatch(closeModal());
    }).catch((error) => {
      error.graphQLErrors.map(({ message }) => {
        dispatch(updating(false));
        dispatch(setErrorMessage(client.firstName, message));
        return false;
      });
    });
  }
};

export default create;
