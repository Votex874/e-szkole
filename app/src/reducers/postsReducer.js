import { FETCH_POSTS, DELETE_POST } from './actions/types'

const initState = {
  list: [],
}

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        list: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        list: state.list.filter(post => post._id !== action.payload._id)
      }
    default:
      return state;
  }
}