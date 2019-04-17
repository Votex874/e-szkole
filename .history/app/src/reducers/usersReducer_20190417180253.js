import { FETCH_USERS, NEW_USER } from './actions/types'
import initialState from './initialState';

const a = {...initialState}

console.log(a)
console.log(initialState)

const initState = {
  ...initialState,
  users: [],
  user: {}
}

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