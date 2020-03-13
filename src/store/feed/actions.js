import axios from 'axios'

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const updatePosts = (posts, loading) => {
  
  return {
    type: "UPDATE_POSTS",
    payload: {
      loading: loading,
      posts: posts
    }
  };
}

export const thunkFunction = async (dispatch, getState) => {
    const state = getState()
    dispatch(updatePosts([...state.feed.posts], true))
    const fetchedPosts = await axios.get(`${API_URL}/posts?offset=${state.feed.posts.length}&limit=5`)
    dispatch(updatePosts([...state.feed.posts, ...fetchedPosts.data.rows], false))
    const devs = await axios.get(`${API_URL}/developers`)
    console.log(devs)
  }