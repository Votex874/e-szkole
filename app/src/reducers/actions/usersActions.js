import { FETCH_USERS, NEW_USER } from './types'

export const fetchUsers = () => async dispatch => {
    await fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(users => dispatch({ 
        type: FETCH_USERS,
        payload: users
      }))
      .catch(err => Error(err))
}