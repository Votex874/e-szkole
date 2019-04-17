import { FETCH_USERS, NEW_USER } from './actions/types'
import initialState from './initialState';

const initState = {
  users: [],
  user: {},
  ...initialState,
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