import { FETCH_USERS, NEW_USER } from './actions/types'

const initialState = {
  users: [],
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    default: 
      return state;
  }
}