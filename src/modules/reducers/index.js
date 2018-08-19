import { combineReducers } from 'redux'
import counter from './counter'
import account from './account'

export default combineReducers({
  counter,
  account
})