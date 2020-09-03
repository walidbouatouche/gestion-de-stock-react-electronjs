
import { productConstants } from '../constants/product.constants'
export function product(state = {}, action: any) {
    console.log(action)
    switch (action.type) {

        case productConstants.GET_PRODUCT_BY_ID_REQUEST:
            return {
                loading: true
            };

        case productConstants.GET_PRODUCT_BY_ID_SUCCESS:
            return {
               productById: action.product.data
            }

        case productConstants.GET_PRODUCT_BY_ID_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }




}