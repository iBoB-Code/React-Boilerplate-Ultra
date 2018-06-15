// const defaults = {
//   counter: 0,
//   toggle: false,
//   error: null
// };
//
// export default function reducer(state = defaults, action) {
//   switch (action.type) {
//   case 'TOGGLE_CHANGE': {
//     return {
//       ...state,
//       toggle: action.payload
//     };
//   }
//   case 'INCREMENT_COUNTER': {
//     return {
//       ...state,
//       counter: state.counter + action.payload
//     };
//   }
//   default: {
//     // console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
//     return state;
//   }
//   }
// }
