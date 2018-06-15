import axios from 'axios';
import LocalStorageManager from 'UTILS/LocalStorageManager';

export function makeCall(url) {
  return dispatch => new Promise((resolve, reject) => {
    dispatch({ type: 'FETCH_UPDATE', payload: true });
    return axios.get(url)
      .then((response) => {
        dispatch({ type: 'FETCH_UPDATE', payload: false });
        dispatch({ type: 'DATA_UPDATE', payload: response.data });
        return resolve();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_UPDATE', payload: false });
        return reject(err);
      });
  });
}

export function login(data) {
  return dispatch => new Promise((resolve, reject) => {
    dispatch({ type: 'FETCH_UPDATE', payload: true });
    setTimeout(() => {
      dispatch({ type: 'FETCH_UPDATE', payload: false });
      if (data.userName === 'admin' && data.pass === 'admin') {
        LocalStorageManager.setUserToken('AZERTYUIOP');
        dispatch({ type: 'LOGIN', payload: 'AZERTYUIOP' });
        return resolve();
      }
      dispatch({ type: 'LOGOUT', payload: null });
      return reject('Wrong username or password.');
    }, 3000);
  });
}

export function verifyToken() {
  const token = LocalStorageManager.getUserToken();
  return dispatch => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === 'AZERTYUIOP') {
        dispatch({ type: 'LOGIN', payload: 'AZERTYUIOP' });
        return resolve();
      }
      dispatch({ type: 'LOGOUT', payload: null });
      return reject('No token detected.');
    }, 2000);
  });
}
