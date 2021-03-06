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

export const fetchList = (query, page, dispatch) => {
  // make request
  Client.query({
    query: Graphql`
      {
        crmClientList(query: "${query}", page: ${page}, perPage: 21) {
          totalPages
          currentPage
          totalEntries
          previousPage
          nextPage
          nodes {
            id
            avatar
            firstName
            lastName
            email
            sex
          }
        }
      }
    `,
    fetchPolicy: 'network-only',
  }).then((result) => {
    dispatch(receiveList(result.data.crmClientList, page));
  });
};
