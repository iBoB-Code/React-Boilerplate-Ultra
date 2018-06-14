import LocalStorageManager from 'UTILS/LocalStorageManager';

const defaults = {
  data: [],
  fetching: false,
  login: null,
  token: '',
  moyen: [],
  bon: [],
  cher: []
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
    const newData = state.data.concat(action.payload);
    return {
      ...state,
      data: newData,
      cher: newData.filter(apt => apt.bedroomsQuantity <= 2).filter(apt => apt.pricePerSquareMeter > 39),
      moyen: newData.filter(apt => apt.bedroomsQuantity <= 2).filter(apt => apt.pricePerSquareMeter <= 39 && apt.pricePerSquareMeter > 26),
      bon: newData.filter(apt => apt.bedroomsQuantity <= 2).filter(apt => apt.pricePerSquareMeter <= 26)
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
