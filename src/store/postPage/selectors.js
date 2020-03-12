export const selectPostAndComments = state => {
  return !state.postPage.loading ? 
    {post: state.postPage.post, loading: state.postPage.loading, comments: state.postPage.comments } 
    : null
}

