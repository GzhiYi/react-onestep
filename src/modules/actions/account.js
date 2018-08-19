import {
  GET_GITHUB_ACCOUNT_REQUEST,
  GET_GITHUB_ACCOUNT_SUCCESS,
  GET_GITHUB_ACCOUNT_FAILURE
} from '../constants'
import http from '../../settings/http'

export const getGithubInfo = (name) => {
  return dispatch => {
    dispatch({
      type: GET_GITHUB_ACCOUNT_REQUEST
    })

    http.get(`/users/${name}`).then(response => {
      return dispatch({
        type: GET_GITHUB_ACCOUNT_SUCCESS,
        response: response.data
      })
    })
    .catch(error => dispatch({
        type: GET_GITHUB_ACCOUNT_FAILURE,
        error
    }))
  }
}