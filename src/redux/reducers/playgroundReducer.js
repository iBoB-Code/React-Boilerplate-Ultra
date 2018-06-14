const defaults = {
  x: [],
  y: [],
  pred: { a: 500, b: 0 },
  error: null
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
  case 'ADD_POINT': {
    const nx = state.x.slice(0);
    const ny = state.y.slice(0);
    nx.push(action.payload.x);
    ny.push(action.payload.y);
    return {
      ...state,
      x: nx,
      y: ny
    };
  }
  case 'UPDATE_PRED': {
    return {
      ...state,
      pred: action.payload
    };
  }
  default: {
    return state;
  }
  }
}
