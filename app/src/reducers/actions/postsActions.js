import { FETCH_POSTS, DELETE_POST } from './types'

export const fetchPosts = () => async dispatch => {
  await fetch('http://localhost:5000/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
    .catch(err => Error(err))
}

export const deletePost = id => async dispatch => {
  await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: DELETE_POST,
      payload: post
    }))
    .catch(err => Error(err))
}