// src/components/PostsFeed.js
import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { thunkFunction } from "../store/feed/actions";
import { Link } from 'react-router-dom'

export default function PostsFeed() {

const dispatch = useDispatch()
const loading = useSelector(selectFeedLoading)
const posts = useSelector(selectFeedPosts)

  useEffect(() => {
    dispatch(thunkFunction);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map(post => {
        return <div key={post.id}>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                  <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
                  <ul>{post.tags.map(tag => <button key={tag.id}>{tag.tag}</button>)}</ul>
               </div>
      })}
      {loading ? <h3>Loading...</h3> : <button onClick={() => dispatch(thunkFunction)}>Load more</button>}
    </div>
  );
}