import sendRequest from '../../helpers/sendRequest'
import { productConstants } from '../constants/product.constants'

export const productAction = {

    getProductByid

}

function getProductByid(id: any) {

    return (dispatch: any) => {
        dispatch({
            type: productConstants.GET_PRODUCT_BY_ID_REQUEST,
        })

        return sendRequest({
            method: 'GET',
            url: `/product/getproductbyid/${id}`,

        }).then(product=> {

            dispatch({
                type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
                product
            })

        }, ({ response }) => {
            dispatch({
                type: productConstants.GET_PRODUCT_BY_ID_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}