import { ActionTypes }  from "../actionTypes/index";
import axiosFn from '../../axios/index';

export function updateUserDetails( userId,first_name, last_name){

    const url = '/users/update/details'
    const apiPayload ={
        method:"POST",
        data: {userId,first_name, last_name}
    }

    console.log("NSIDE USER ACTION  "+userId,first_name, last_name )

    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.UPDATE_USER)
    }

    // return {type:ActionTypes.UPDATE_USER.SUCCESS, data: {userId,first_name, last_name}}
    
}

export function loginUser(username, password){
    
    const url = '/users/login/tokenGen'
    const apiPayload ={
        method:"POST",
        data: {username,password}
    }


    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.LOGIN_USER)
    }

}

export function varrifyJWT(jwt){
    const url = '/users/login/tokenVal'
    const apiPayload ={
        method:"POST",
        data: {jwt}
    }


    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.VARIFY_JWT)
    }
}

export function updatePassword(currentPassword,newPassword,userId){
    
    const url = '/users/update/password'
    const apiPayload ={
        method:"POST",
        data: {currentPassword,newPassword,userId}
    }

    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.UPDATE_PASSWORD)
    }

}

export function logout(){
    return {type:ActionTypes.LOGOUT.SUCCESS}
}


export function createUserAccount(first_name,last_name,username,email,password){
    
    const url = '/users/create/user'
    const apiPayload ={
        method:"POST",
        data: {first_name,last_name,username,email,password}
    }

    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.CREATE_USER)
    }

}