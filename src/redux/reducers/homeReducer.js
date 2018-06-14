const defaults = {
  ready: 0,
  socialDesc: '',
  error: null
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
  case 'CHANGE_SOCIAL_DESC': {
    return {
      ...state,
      socialDesc: action.payload
    };
  }
  case 'HOME_READY': {
    return {
      ...state,
      ready: state.ready + 1
    };
  }
  default: {
    return state;
  }
  }
}
