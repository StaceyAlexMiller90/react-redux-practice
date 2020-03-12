const initialState = {
  loading: true,
  posts: []
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_POSTS": {
      return {...state, loading: action.payload.loading, posts: action.payload.posts}
    }
    default: {
      return state;
    }
  }
}