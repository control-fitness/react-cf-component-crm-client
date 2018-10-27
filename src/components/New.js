import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, Form, Select, Message,
} from 'semantic-ui-react';
import I18n from 'react-cf-helper-i18n';

const sexOptions = [
  {
    key: '0',
    text: I18n.t('crm.client.form.female'),
    value: '0',
  },
  {
    key: '1',
    text: I18n.t('crm.client.form.male'),
    value: '1',
  },
];

const New = function New(props) {
  const {
    open,
    closeModal,
    updating,
    create,
    firstName,
    lastName,
    sex,
    firstNameErrorMessage,
    lastNameErrorMessage,
    sexErrorMessage,
    setValue,
  } = props;

  return (
    <Modal size="mini" open={open} onClose={() => closeModal()}>
      <Modal.Header>
        {I18n.t('crm.client.new.title')}
      </Modal.Header>
      <Modal.Content>
        {firstNameErrorMessage !== '' && (
        <Message negative>
          {firstNameErrorMessage}
        </Message>
        )}
        {lastNameErrorMessage !== '' && (
          <Message negative>
            {lastNameErrorMessage}
          </Message>
        )}
        {sexErrorMessage !== '' && (
          <Message negative>
            {sexErrorMessage}
          </Message>
        )}
        <Form>
          <Form.Field required>
            <Form.Input
              label={I18n.t('crm.client.form.firstName')}
              onChange={event => setValue(event.target.value, 'firstName')}
              placeholder={I18n.t('crm.client.form.firstName')}
              autoFocus="autofocus"
              value={firstName}
              error={firstNameErrorMessage !== ''}
              fluid
            />
          </Form.Field>
          <Form.Field required>
            <Form.Input
              label={I18n.t('crm.client.form.lastName')}
              onChange={event => setValue(event.target.value, 'lastName')}
              placeholder={I18n.t('crm.client.form.lastName')}
              value={lastName}
              error={lastNameErrorMessage !== ''}
              fluid
            />
          </Form.Field>
          <Form.Field
            control={Select}
            options={sexOptions}
            error={sexErrorMessage !== ''}
            onChange={(_, data) => setValue(data.value, 'sex')}
            label={{ children: I18n.t('crm.client.form.sex'), htmlFor: 'form-select-control-sex' }}
            placeholder={I18n.t('crm.client.form.sex')}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          onClick={() => closeModal()}
        >
          {I18n.t('form.buttons.cancel')}
        </Button>
        <Button
          loading={updating}
          positive
          icon="save"
          labelPosition="right"
          content={I18n.t('form.buttons.save')}
          onClick={() => create({ firstName, lastName, sex })}
        />
      </Modal.Actions>
    </Modal>
  );
};

New.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  updating: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  firstNameErrorMessage: PropTypes.string.isRequired,
  lastNameErrorMessage: PropTypes.string.isRequired,
  sexErrorMessage: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default New;
