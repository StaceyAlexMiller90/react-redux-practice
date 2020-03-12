const initialState = {
  loading: true,
  post: null,
  comments: []
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING": {
      return {...state, loading: action.payload.loading}
    }
    case "POST_FETCHED": {
      return {...state, loading: action.payload.loading, post: action.payload.post, comments: action.payload.comments}
    }
    default: {
      return state;
    }
  }
}