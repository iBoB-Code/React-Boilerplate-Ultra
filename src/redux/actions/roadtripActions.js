import axios from 'axios';

export function modalOpen(val) {
  return {
    type: 'MODAL_OPEN',
    payload: val
  };
}

export function modalClose() {
  return {
    type: 'MODAL_CLOSE',
    payload: true
  };
}

export function ip() {
  return dispatch => new Promise((resolve, reject) => {
    return axios.get('https://webhook.site/24e121dc-b894-490f-b900-b2e68457c30d')
    .then((response) => {
      dispatch({ type: 'IP', payload: response.data });
      return resolve();
    })
    .catch((err) => {
      return reject(err);
    });
  });
}
