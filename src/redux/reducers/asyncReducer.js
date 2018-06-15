import LocalStorageManager from 'UTILS/LocalStorageManager';

const defaults = {
  data: '',
  fetching: false,
  login: null,
  token: ''
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
  case 'FETCH_UPDATE': {
    return {
      ...state,
      fetching: action.payload
    };
  }
  case 'DATA_UPDATE': {
    return {
      ...state,
      data: action.payload
    };
  }
  case 'LOGIN': {
    return {
      ...state,
      login: true,
      token: action.payload
    };
  }
  case 'LOGOUT': {
    LocalStorageManager.removeUserToken();
    return {
      ...state,
      login: false,
      token: ''
    };
  }
  default: {
    // console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
    return state;
  }
  }
}
