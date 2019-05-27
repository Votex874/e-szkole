import { FETCH_POSTS, DELETE_POST, EDIT_POST, NEW_POST } from './actions/types'

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
    case NEW_POST:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case DELETE_POST:
      return {
        ...state,
        list: state.list.filter(post => post._id !== action.payload._id)
      }
    case EDIT_POST:
      const index = state.list.findIndex(post => post._id === action.payload._id)
      let arrayOfPosts = [...state.list]
      arrayOfPosts[index] = action.payload
      return {
        ...state,
        list: arrayOfPosts
      }
    default:
      return state;
  }
}