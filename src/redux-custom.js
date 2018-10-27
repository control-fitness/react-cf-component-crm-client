/* eslint no-param-reassign: "error" */
// https://github.com/reduxjs/react-redux/blob/master/docs/api.md#examples-2

import { connect, createProvider } from 'react-redux';

const STORE_KEY = 'crmClient';

export const Provider = createProvider(STORE_KEY);

function connectExtended(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {
  options.storeKey = STORE_KEY;
  return connect(mapStateToProps, mapDispatchToProps, mergeProps, options);
}

export { connectExtended as connect };
