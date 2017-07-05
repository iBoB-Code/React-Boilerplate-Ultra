import axios from 'axios';

export function fetchDummyApi() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DUMMY_API' });
    axios.get('https://reqres.in/api/users/2')
    .then((response) => {
      dispatch({ type: 'FETCH_DUMMY_API_FULFILLED', payload: response.data.data.first_name });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_DUMMY_API_REJECTED', payload: err });
    });
  };
}

export function increment(val) {
  return {
    type: 'INCREMENT',
    payload: val,
  };
}
