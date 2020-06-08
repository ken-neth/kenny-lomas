
import { ActionTypes } from "../actionTypes/index";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const initialState = {};

const notifications = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_NOTIFICATION_TO_READ.SUCCESS:{
            console.log("NOTIFICATION REDUCER")
            console.log(action.data)
            const {not} =action.data
            if (not && not.length !== 0 ){
                var newState = {...state}

                not.forEach((key) =>{
                    newState = {...newState,  [key]:{...state[key], displayed : true} }
                })
                return{...newState}
            }
            else{
                return state
            }
        }
        case ActionTypes.UPDATE_PASSWORD.SUCCESS:{
            const new_not = createNotification(toast.TYPE.SUCCESS, "Password Updated", "update_password")
            return {...state , ...new_not}
        }
        case ActionTypes.UPDATE_PASSWORD.FAILURE:{
            const new_not = createNotification(toast.TYPE.ERROR, "Password Update Failed", "update_password")
            return {...state , ...new_not}
        }
        case ActionTypes.UPDATE_USER.SUCCESS:{
            const new_not = createNotification(toast.TYPE.SUCCESS, "Details Updated", "update_user")
            return {...state , ...new_not}
        }
        case ActionTypes.UPDATE_USER.FAILURE:{
            const new_not = createNotification(toast.TYPE.ERROR, "Details Update Failed", "update_user")
            return {...state , ...new_not}
        }
        case ActionTypes.ADD_ART_DB.SUCCESS:{
            const new_not = createNotification(toast.TYPE.SUCCESS, "Artwork Added", "add_art")
            return {...state , ...new_not}
        }
        case ActionTypes.ADD_ART_DB.FAILURE:{
            const new_not = createNotification(toast.TYPE.ERROR, "Artwork Add Failed", "add_art")
            return {...state , ...new_not}
        }
        case ActionTypes.UPLOAD_PHOTO.SUCCESS:{
            const new_not = createNotification(toast.TYPE.SUCCESS, "Photo Uploaded", "upload_photo")
            return {...state , ...new_not}
        }
        case ActionTypes.UPLOAD_PHOTO.FAILURE:{
            const new_not = createNotification(toast.TYPE.ERROR, "Photo Upload Failed", "upload_photo")
            return {...state , ...new_not}
        }
        case ActionTypes.CREATE_USER.SUCCESS:{
            const new_not = createNotification(toast.TYPE.SUCCESS, "Account Created", "create_user")
            return {...state , ...new_not}
        }
        case ActionTypes.CREATE_USER.FAILURE:{
            const new_not = createNotification(toast.TYPE.ERROR, "Account Creation Failed", "create_user")
            return {...state , ...new_not}
        }
        default:
            return state
      }

};

function createNotification(notificationType, message, action ){
    const key = +new Date
    const obj = {key,notificationType, message, action, displayed:false}
    return {[key]:obj}
}


export default notifications;
