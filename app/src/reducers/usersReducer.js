import { FETCH_USERS, DELETE_USER } from './actions/types'

const initState = {
  users: [],
  user: {},
}

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload._id)
      }  
    default: 
      return state;
  }
}