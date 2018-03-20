export function incrementCounter(val) {
  return {
    type: 'INCREMENT_COUNTER',
    payload: val,
  };
}

export function toggleChange(val) {
  return {
    type: 'TOGGLE_CHANGE',
    payload: val,
  };
}
