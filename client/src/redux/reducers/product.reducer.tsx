
import { productConstants } from '../constants/product.constants'
export function product(state = {}, action: any) {
    console.log(action)
    switch (action.type) {

        case productConstants.GET_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };

        case productConstants.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                productById: action.product.data
            }

        case productConstants.GET_PRODUCT_BY_ID_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case productConstants.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case productConstants.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.product.data
            }

        case productConstants.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case productConstants.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case productConstants.ADD_PRODUCT_SUCCESS:
            return {
                ...state,

            }

        case productConstants.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case productConstants.DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case productConstants.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,

            }

        case productConstants.DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }




}