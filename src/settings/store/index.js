import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../../modules/reducers'

export const history = createHistory()
const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  logger
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window._REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)
export default store