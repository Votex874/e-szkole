import { FETCH_USERS, NEW_USER } from './actions/types'

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
    default: 
      return state;
  }
}