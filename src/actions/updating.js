export const UPDATING = 'UPDATING';

export function updating(value) {
  return {
    type: UPDATING,
    value,
  };
}
