import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import initReducer from './initialState/initReducer'
import postsReducer from './postsReducer'

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  initialState: initReducer
})