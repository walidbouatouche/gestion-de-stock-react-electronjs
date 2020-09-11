
import { userConstants } from '../constants/user.constants'
export function user(state = {}, action: any) {
    console.log(action)
    switch (action.type) {


        case userConstants.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case userConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users.data
            }

        case userConstants.GET_USERS_FAILURE:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }




}