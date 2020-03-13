import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchPost } from '../../store/postPage/actions'
import { useSelector, useDispatch } from "react-redux";
import { selectPostAndComments } from '../../store/postPage/selectors'
import ReactMarkdown from "react-markdown";
import moment from "moment";
import './PostPage.css'

const PostPage = () => {
  const dispatch = useDispatch()
  const postData = useSelector(selectPostAndComments)
  const { id } = useParams();

  console.log(postData)

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div className='page'>
      <h1>More about post {id}</h1>
      {!postData ? (
      <p>Loading...</p>
       ) : ( 
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">
            By {postData.post.developer.name}<br/>   
            {moment(postData.post.createdAt).format("DD-MM-YYYY")}
            {postData.post.tags.map(tag => <button>{tag.tag}</button>)}
            </p>
          <ReactMarkdown source={postData.post.content} />
          <h2>Comments</h2>
          {postData.comments.length === 0 ? <p>No comments yet</p>
              : postData.comments.map(comment => {
                return <div>
                          <strong>{comment.text}</strong> 
                          by {comment.developer.name} 
                          at {moment(comment.createdAt).format("DD-MM-YYYY")}
                       </div>
              })}
        </>
       )}
    </div>
  )
}

export default PostPage
