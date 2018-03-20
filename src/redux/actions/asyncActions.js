import axios from 'axios';

export function apiCall() {
  return dispatch => new Promise((resolve, reject) => {
    dispatch({ type: 'FETCH_UPDATE', payload: { status: true, message: 'Fetching a real API online...' } });
    return axios.get('https://reqres.in/api/users/2')
      .then((response) => {
        dispatch({ type: 'FETCH_UPDATE', payload: { status: false, message: 'It is a success : look at the data !' } });
        dispatch({ type: 'DATA_UPDATE', payload: response.data });
        return resolve();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_UPDATE', payload: { status: false, message: 'There was an error.' } });
        return reject(err);
      });
  });
}

export function delayedAction() {
  return dispatch => new Promise((resolve) => {
    dispatch({ type: 'FETCH_UPDATE', payload: { status: true, message: 'Just Waiting 5 seconds...' } });
    setTimeout(() => {
      dispatch({ type: 'FETCH_UPDATE', payload: { status: false, message: 'Ok, all is good :)' } });
      return resolve();
    }, 5000);
  });
}
