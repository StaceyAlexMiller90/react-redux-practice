const initialState = {
  me: null, // the logged-in user
  accessToken: null
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return {...state, me: action.payload.me, accessToken: action.payload.accessToken}
    }
    case "LOGOUT": {
      return {me: null, accessToken: null}
    }
    default: {
      return state;
    }
  }
}