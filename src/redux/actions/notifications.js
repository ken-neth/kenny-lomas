import { ActionTypes }  from "../actionTypes/index";


export function notificationDisplayed (not){

    return {type:ActionTypes.SET_NOTIFICATION_TO_READ.SUCCESS, data:{not}}

}