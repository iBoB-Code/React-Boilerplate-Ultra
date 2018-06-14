export function homeReady() {
  return {
    type: 'HOME_READY',
    payload: true
  };
}

export function changeSocialDesc(val) {
  return {
    type: 'CHANGE_SOCIAL_DESC',
    payload: val
  };
}
