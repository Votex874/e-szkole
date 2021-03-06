import { FETCH_USERS, DELETE_USER, NEW_USER } from './types'

export const fetchUsers = () => async dispatch => {
    await fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(users => dispatch({ 
        type: FETCH_USERS,
        payload: users
      }))
      .catch(err => Error(err))
}

export const deleteUser = id => async dispatch => {
  await fetch(`http://localhost:5000/users/${id}`,{
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(user => dispatch({
      type: DELETE_USER,
      payload: user
    }))
    .catch(err => Error(err))
}


export const createUser = user => async dispatch => {
  await fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: NEW_USER,
        payload: user
      })
    })
    .catch(err => Error(err))
} 