import { createAction, handleActions } from 'redux-actions'

const initialState = {
    me:{
        id:null,
        email:null,
        nickname:null,
        provider:null,
    },
    isLogin:false,
    error:null,
    loadding:false
}

const USER_LOGIN = {
    REQUEST:'USER/LOGIN_REQUEST',
    SUCCESS:'USER/LOGIN_SUCCESS',
    FAIL:'USER/LOGIN_FAIL'
}

export const user_login_request = createAction(USER_LOGIN.REQUEST)
export const user_login_success = createAction(USER_LOGIN.SUCCESS)
export const user_login_fail = createAction(USER_LOGIN.FAIL)

const user = (state=initialState,action) => {
    switch(action.type){
        case USER_LOGIN.REQUEST:
            return{
                ...state,
                loadding:true,
                isLogin:false,
                error:null
            }
        case USER_LOGIN.SUCCESS:
            return{
                ...state,
                loadding:false,
                isLogin:true,
                error:null,
                me:{
                    ...action.payload.user
                }
            }
        case USER_LOGIN.FAIL:
            return{
                ...state,
                loadding:false,
                isLogin:false,
                error:action
            }
        default:
            return state
    }
}


export default user