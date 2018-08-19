import {
  GET_GITHUB_ACCOUNT_REQUEST,
  GET_GITHUB_ACCOUNT_SUCCESS,
  GET_GITHUB_ACCOUNT_FAILURE
} from '../constants'

export const getGithubInfo = () => {
  return dispatch => {
    dispatch({
      type: GET_GITHUB_ACCOUNT_REQUEST
    })

    fetch(`https://api.github.com/users/GzhiYi`).then(
      response =>
        dispatch({
          type: GET_GITHUB_ACCOUNT_SUCCESS,
          response
        }),
      error =>
        dispatch({
          type: GET_GITHUB_ACCOUNT_FAILURE,
          error
        })
    )
  }
}