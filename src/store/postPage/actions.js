// src/store/postPage/actions.js
import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
  return {
    type: "START_LOADING",
    payload: {
      loading: true
    }
  }
}

export function postFullyFetched(obj) {
  return {
    type: "POST_FETCHED",
    payload: {
      loading: false,
      post: obj.post,
      comments: obj.comments.rows
    }
  }
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`)
    ]);
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data
      })
    )
  }
}

