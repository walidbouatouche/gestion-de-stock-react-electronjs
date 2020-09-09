
import { orderConstants} from '../constants/order.constants'
export function order(state = {}, action: any) {
    console.log(action)
    switch (action.type) {

        case  orderConstants.ADD_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case orderConstants.ADD_ORDER_SUCCESS:
            return {
                ...state,
            orderAdded: true
            }

        case orderConstants.ADD_ORDER_FAILURE:
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state;
    }




}