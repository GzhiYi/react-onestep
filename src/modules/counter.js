import { CONST } from './constants'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case CONST.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case CONST.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case CONST.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
console.log('const', CONST)
export const increment = () => {
  return dispatch => {
    dispatch({
      type: CONST.INCREMENT_REQUESTED
    })

    dispatch({
      type: CONST.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: CONST.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: CONST.INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: CONST.DECREMENT_REQUESTED
    })

    dispatch({
      type: CONST.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: CONST.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: CONST.DECREMENT
      })
    }, 3000)
  }
}