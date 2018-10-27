export const SET_VALUE = 'SET_VALUE';

export function setValue(value, property) {
  return {
    type: SET_VALUE,
    value,
    property,
  };
}
