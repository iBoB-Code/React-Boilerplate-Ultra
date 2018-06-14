const defaults = {
  modalState: false,
  selectedPictures: 0,
  ip: '',
  error: null
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
  case 'MODAL_OPEN': {
    return {
      ...state,
      modalState: true,
      selectedPictures: action.payload
    };
  }
  case 'MODAL_CLOSE': {
    return {
      ...state,
      modalState: false
    };
  }
  case 'IP': {
    return {
      ...state,
      ip: action.payload
    };
  }
  default : {
    // console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
    return state;
  }
  }
}
