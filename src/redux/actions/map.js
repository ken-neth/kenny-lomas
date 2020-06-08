import { ActionTypes }  from "../actionTypes/index";

export function updateMapCenter(lat, lng){
    
    return {type:ActionTypes.UPDATE_MAP_CENTER.SUCCESS, data:{lat,lng}}
}

export function updateUserLoc(lat,lng){
    return {type:ActionTypes.UPDATE_USER_LOC.SUCCESS, data:{lat,lng}}
}

export function updateAddFlag(val){
    
    return {type:ActionTypes.UPDATE_ADD_FLAG.SUCCESS, data:{flag:val}}
}

export function toggleMapFilter(){
    return {type:ActionTypes.TOGGLE_MAP_FILTER.SUCCESS}
}

