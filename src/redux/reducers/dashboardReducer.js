const defaults = {
  aChoice: 'help',
  bChoice: 'help',
  aScore: 0,
  bScore: 0,
  message: '',
  hasPlayed: false,
  error: null
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
  case 'UPDATE_SCORE': {
    return {
      ...state,
      aChoice: action.payload.a,
      bChoice: action.payload.b,
      aScore: state.aScore + action.payload.player1,
      bScore: state.bScore + action.payload.player2,
      message: action.payload.message,
      hasPlayed: true
    };
  }
  case 'RESET': {
    return {
      ...state,
      hasPlayed: false,
      bChoice: 'help'
    };
  }
  default: {
    // console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
    return state;
  }
  }
}
