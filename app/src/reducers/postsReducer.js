import { FETCH_POSTS, DELETE_POST, EDIT_POST } from './actions/types'

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
    case EDIT_POST:
      console.log(state.list)
      console.log(action.payload)
      const index = state.list.findIndex(post => post._id === action.payload._id)
      console.log('dzialam')
      let arrayOfPosts = [...state.list]
      arrayOfPosts[index] = action.payload
      console.log(index, ' index')
      console.log(arrayOfPosts, ' arrayOfPosts')
      return {
        ...state,
        list: arrayOfPosts
      }
    default:
      return state;
  }
}