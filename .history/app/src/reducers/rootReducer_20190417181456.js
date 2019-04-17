import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import initReducer from './initReducer'

export default combineReducers({
  users: usersReducer,
  initialState: initReducer
})