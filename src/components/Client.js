import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import Home from '../containers/Home';
import store from '../store';
import { Provider } from '../redux-custom';

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
