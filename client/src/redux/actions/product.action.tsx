import sendRequest from '../../helpers/sendRequest'
import { productConstants } from '../constants/product.constants'

export const productAction = {

    getProductByid,
    getProducts,
    addProduct,
    deleteProduct ,
    updateProduct

}

function getProductByid(id: any) {

    return (dispatch: any) => {
        dispatch({
            type: productConstants.GET_PRODUCT_BY_ID_REQUEST,
        })

        return sendRequest({
            method: 'GET',
            url: `/product/getproductbyid/${id}`,

        }).then(product => {

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

function getProducts() {

    return (dispatch: any) => {
        dispatch({
            type: productConstants.GET_PRODUCTS_REQUEST,
        })

        return sendRequest({
            method: 'GET',
            url: `/product/getproducts/`,

        }).then(product => {

            dispatch({
                type: productConstants.GET_PRODUCTS_SUCCESS,
                product
            })

        }, ({ response }) => {
            dispatch({
                type: productConstants.GET_PRODUCTS_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}
function addProduct(data: any) {

    return (dispatch: any) => {
        dispatch({
            type: productConstants.ADD_PRODUCT_REQUEST,
        })

        return sendRequest({
            method: 'POST',
            url: `/product/addproduct/`,
            data

        }).then(() => {

            dispatch(getProducts())

        }, ({ response }) => {
            dispatch({
                type: productConstants.ADD_PRODUCT_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}

function updateProduct(data: any) {

    return (dispatch: any) => {
        dispatch({
            type: productConstants.UPDATE_PRODUCT_REQUEST,
        })

        return sendRequest({
            method: 'PUT',
            url: `/product/editproduct/`,
            data

        }).then(() => {

            dispatch(getProducts())

        }, ({ response }) => {
            dispatch({
                type: productConstants.UPDATE_PRODUCT_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}


function deleteProduct(productId: any) {

    return (dispatch: any) => {
        dispatch({
            type: productConstants.DELETE_PRODUCT_REQUEST,
        })

        return sendRequest({
            method: 'DELETE',
            url: `/product/deleteproduct/${productId}`,


        }).then(() => {
            // here wwe do not need the seccus action
            dispatch(getProducts())

        }, ({ response }) => {
            dispatch({
                type: productConstants.DELETE_PRODUCT_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}