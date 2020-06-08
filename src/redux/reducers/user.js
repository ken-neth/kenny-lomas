
import { ActionTypes } from "../actionTypes/index";

const initialState = {
    userId : null,
    first_name : null,
    last_name : null,
    username: null,
    is_logged_in: false,
    email:null

};

const user = (state = initialState, action) => {
    switch (action.type) {
    
        
        case ActionTypes.UPDATE_USER.SUCCESS :
            
            var {userId, first_name, last_name, username} = action.data

            var newUserDetails ={}
            
            if (userId) newUserDetails.userId = userId
            if (first_name) newUserDetails.first_name = first_name
            if (last_name) newUserDetails.last_name = last_name
            if (username) newUserDetails.username = username

            return {...state, ...newUserDetails}

        case ActionTypes.UPDATE_USER_LOGGEDIN.SUCCESS :
            return {...state, is_logged_in: action.data.is_logged_in }
        
        case ActionTypes.UPDATE_USER_LOGGEDIN.FAILURE :
            return {...state, is_logged_in: false } 
        case ActionTypes.LOGIN_USER.SUCCESS:
            var {userId, firstName, lastName, username,email} = action.data.user

            localStorage.jwt = action.data.JWT

            return{...state, userId:userId, first_name:firstName, last_name:lastName, username:username, email:email,is_logged_in: true }
        case ActionTypes.VARIFY_JWT.FAILURE:
            localStorage.jwt =''
            return {...state, is_logged_in: false } 
        case ActionTypes.VARIFY_JWT.SUCCESS:
            var {userId, firstName, lastName, username,email} = action.data.user
            return{...state, userId:userId, first_name:firstName, last_name:lastName, username:username, email:email,is_logged_in: true }

        case ActionTypes.LOGOUT.SUCCESS:
            localStorage.jwt = ''
            return{...state,is_logged_in:false,userId:null,first_name:null,last_name:null,username:null,email:null}

        default:
            return state
      }
    
      
};


export default user;