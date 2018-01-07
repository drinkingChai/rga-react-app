import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

// single reducer to control modal state
import modal from './reducer'

// export actions
export * from './reducer'

export default createStore(
  combineReducers({ modal }),
  applyMiddleware(loggerMiddleware)
)
