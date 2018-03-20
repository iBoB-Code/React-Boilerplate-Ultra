const defaults = {
  message: 'Waiting for anything to be done...',
  data: '...',
  fetch: false,
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
    case 'FETCH_UPDATE': {
      return {
        ...state,
        fetch: action.payload.status,
        message: action.payload.message,
      };
    }
    case 'DATA_UPDATE': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
      return state;
    }
  }
}
