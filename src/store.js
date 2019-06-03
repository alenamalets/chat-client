import { applyMiddleware, compose, createStore, combineReducers} from 'redux'
import reduxThunk from 'redux-thunk'
import socketset from 'socketset'

const initialState = []

function messages (state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES':
      return action.payload
    default:
      return state
  }
}
function users (state = initialState, action) {
  switch (action.type) {
    case 'USERS':
      return action.payload
    default:
      return state
  }
}

function sent (state = false, action) {
  switch (action.type) {
    case 'MESSAGE_SENT':
      return !state
    default:
      return state
  }
}
function sent2 (state = false, action) {
  switch (action.type) {
    case 'USER_SENT':
      return !state
    default:
      return state
  }
}

function login(state = null, action = {}) {
  switch (action.type) {
      case 'LOGIN_SUCCESS':  
          return action.jwt;   
      default:
          return state;
  }
}

const reducer = combineReducers({ messages, sent, users, sent2, login })

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x

const socket = socketset('localhost:4000')

const middleware = applyMiddleware(reduxThunk, socket)

const enhancer = compose(middleware, devTools)

const store = createStore(reducer, enhancer)

const action = { type: 'SOCKETSET_CONNECT' }
store.dispatch(action)

export default store