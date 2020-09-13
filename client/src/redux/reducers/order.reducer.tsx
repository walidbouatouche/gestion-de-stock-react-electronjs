
import { orderConstants } from '../constants/order.constants'
export function order(state = {}, action: any) {
    console.log(action)
    switch (action.type) {

        case orderConstants.ADD_ORDER_REQUEST:
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

        case orderConstants.GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case orderConstants.GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders.data
            }

        case orderConstants.GET_ORDERS_FAILURE:
            return {
                ...state,
                error: action.error
            }

        case orderConstants.DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case orderConstants.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                orderDeleted: true
            }

        case orderConstants.DELETE_ORDER_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }




}