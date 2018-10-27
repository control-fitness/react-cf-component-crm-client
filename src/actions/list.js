import Client, { Graphql } from 'react-cf-graphql-client';

export const RECEIVE_LIST = 'RECEIVE_LIST';

/**
 * Set received data to state user
 * @param {*} data
 */
export function receiveList(data, page) {
  return {
    type: RECEIVE_LIST,
    data,
    page,
  };
}

export const fetchList = (page, dispath) => {
  // make request
  Client.query({
    query: Graphql`
      {
        crmClientList(page: ${page}) {
          totalPages
          currentPage
          totalEntries
          previousPage
          nextPage
          nodes {
            id
            firstName
            lastName
            sex
          }
        }
      }
    `,
  }).then((result) => {
    dispath(receiveList(result.data.crmClientList, page));
  });
};
