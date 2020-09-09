import sendRequest from '../../helpers/sendRequest'
import {  orderConstants } from '../constants/order.constants'

export const orderAction = {

    addOrder
  

}

 
function addOrder(data: any) {

    return (dispatch: any) => {
        dispatch({
            type:orderConstants.ADD_ORDER_REQUEST,
        })

        return sendRequest({
            method: 'POST',
            url: `/order/makeorder/`,
            data

        }).then(() => {

        dispatch({ type: orderConstants.ADD_ORDER_SUCCESS,
        
        })

        }, ({ response }) => {
            dispatch({
                type: orderConstants.ADD_ORDER_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}
 