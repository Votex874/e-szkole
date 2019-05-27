import { FETCH_POSTS, DELETE_POST, EDIT_POST, NEW_POST } from './types'
import postsReducer from '../postsReducer';

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
    .then(post => {
      dispatch({
      type: DELETE_POST,
      payload: post
    })})
    .catch(err => Error(err))
}

export const editPost = post => async dispatch => {
  await fetch(`http://localhost:5000/posts/${post._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => {
      dispatch({
        type: EDIT_POST,
        payload: post
      })
    })
    .catch(err => Error(err))
}

export const createPost = post => async dispatch => {
  await fetch('http://localhost:5000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => {
      dispatch({
        type: NEW_POST,
        payload: post
      })
    })
    .catch(err => Error(err))
} 