import { 
  GET_GITHUB_ACCOUNT_REQUEST,
  GET_GITHUB_ACCOUNT_SUCCESS,
  GET_GITHUB_ACCOUNT_FAILURE
 } from '../constants'

const initialState = {
  response: null,
  isFetching: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_ACCOUNT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case GET_GITHUB_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        response: action.repsonse,
        isFetching: false
      })

    case GET_GITHUB_ACCOUNT_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false
      })

    default:
      return state
  }
}