import rootReducer from '../redux/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// https://redux.js.org/

const initialState = {}
const middlewares = [thunk]
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = compose


export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)