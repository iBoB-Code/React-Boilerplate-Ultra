export function logout() {
  return {
    type: 'LOGOUT',
    payload: null
  };
}


export function anotherDummyAction(someValue) {
  return {
    type: 'TRIGGER_SOMETHING',
    payload: someValue
  };
}
