export function addPoint(x, y) {
  return {
    type: 'ADD_POINT',
    payload: { x, y }
  };
}

export function updatePred(val) {
  return {
    type: 'UPDATE_PRED',
    payload: val
  };
}
