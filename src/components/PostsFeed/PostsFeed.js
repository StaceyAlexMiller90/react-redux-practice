// src/components/PostsFeed.js
import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../../store/feed/selectors";
import { thunkFunction } from "../../store/feed/actions";
import { Link } from 'react-router-dom'
import './PostsFeed.css'

export default function PostsFeed() {

const dispatch = useDispatch()
const loading = useSelector(selectFeedLoading)
const posts = useSelector(selectFeedPosts)

  useEffect(() => {
    if(posts.length === 0){
    dispatch(thunkFunction);
    }
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map(post => {
        return <div key={post.id} className="mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                  <Link className='link' to={`/post/${post.id}`}><h1 className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{post.title}</h1></Link>
                  <div className='pa3 bt b--black-10'>
                    <p className='f6 f5-ns lh-copy measure'>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
                    <ul>{post.tags.map(tag => <button key={tag.id}>{tag.tag}</button>)}</ul>
                  </div>
               </div>
      })}
      {loading ? <h3>Loading...</h3> : <button onClick={() => dispatch(thunkFunction)} className='f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib'>Load more</button>}
    </div>
  );
}