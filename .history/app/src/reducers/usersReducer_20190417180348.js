import { FETCH_USERS, NEW_USER } from './actions/types'
import initialState from './initialState';

const initState = {
  ...initialState,
  users: [],
  user: {}
}

console.log(initState)

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    default: 
      return state;
  }
}