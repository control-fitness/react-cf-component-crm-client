import React from 'react';
import { Provider } from 'react-redux';
import {
  Container,
} from 'semantic-ui-react';
import Home from '../containers/Home';
import store from '../store';

const Client = function Client() {
  return (
    <Provider store={store}>
      <Container>
        <Home />
      </Container>
    </Provider>
  );
};

export default Client;
