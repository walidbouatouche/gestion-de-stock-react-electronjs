import { combineReducers } from 'redux'
import { product } from './product.reducer'
import { order } from './order.reducer'
import { user } from './user.reducer'
const rootReducer = combineReducers({
   product,
   order ,
   user
})

export default rootReducer;