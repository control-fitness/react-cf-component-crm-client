export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export function setErrorMessage(property, message) {
  return {
    type: SET_ERROR_MESSAGE,
    property,
    message,
  };
}
