import { ActionTypes }  from "../actionTypes/index";

export function updateDirectionsRoute(route){
    return {type:ActionTypes.UPDATE_DIRECTIONS_ROUTE.SUCCESS, data: route}
}

export function updateDirectionsState(state){
    return {type:ActionTypes.UPDATE_DIRECTIONS_STATE.SUCCESS, data: state}
}

export function updateReturnToStart(state){
    return {type:ActionTypes.UPDATE_RETURN_TO_START.SUCCESS, data: state}
}

export function updateDirectionsEndLoc(lat, lng){
    return {type:ActionTypes.UPDATE_DIRECTIONS_END_LOC.SUCCESS, data: {lat,lng}}
}

export function updateDirectionsWaypoints(waypoints){
    return {type:ActionTypes.UPDATE_DIRECTIONS_WAYPOITNTS.SUCCESS, data: {waypoints}}
}

export function addDirectionWaypoints(art){
    return {type:ActionTypes.ADD_DIRECTION_WAYPOINT.SUCCESS, data: {art}}
}

export function clearWaypoints(){
    return {type:ActionTypes.CLEAR_WAYPOINTS.SUCCESS}
}

