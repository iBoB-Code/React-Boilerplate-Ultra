const defaults = {
  response: null,
  fetching: false,
  fetched: false,
  dummyVar: 1,
  error: null,
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
    case 'FETCH_DUMMY_API': {
      return { ...state, fetching: true };
    }
    case 'FETCH_DUMMY_API_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_DUMMY_API_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        response: action.payload,
      };
    }
    case 'INCREMENT': {
      return {
        ...state,
        dummyVar: state.dummyVar + action.payload,
      };
    }
    default : {
      console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
      return state;
    }
  }
}
