import { combineReducers } from 'redux'
import { product } from './product.reducer'
import { order } from './order.reducer'

const rootReducer = combineReducers({
   product,
   order
})

export default rootReducer;