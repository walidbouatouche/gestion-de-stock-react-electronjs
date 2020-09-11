import sendRequest from '../../helpers/sendRequest'
import { userConstants } from '../constants/user.constants'

export const userAction = {

    getUsers



}


function getUsers() {

    return (dispatch: any) => {
        dispatch({
            type: userConstants.GET_USERS_REQUEST,
        })

        return sendRequest({
            method: 'GET',
            url: `/user/getusers/`,

        }).then(users => {

            dispatch({
                type: userConstants.GET_USERS_SUCCESS,
                users
            })

        }, ({ response }) => {
            dispatch({
                type: userConstants.GET_USERS_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}