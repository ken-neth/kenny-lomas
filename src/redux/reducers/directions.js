
import { ActionTypes } from "../actionTypes/index";

const initialState = {
    enable_directions:false,
    lat:{},
    lng:{},
    end_art_id:null,
    route:null,
    waypoints:{},
    returnToStart :false
    
};

const directions = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_DIRECTIONS_ROUTE.SUCCESS :
            return {...state, route:action.data}
        case ActionTypes.UPDATE_DIRECTIONS_STATE.SUCCESS:
            return{...state, enable_directions :action.data}
        case ActionTypes.UPDATE_RETURN_TO_START.SUCCESS:
            return{...state, returnToStart :action.data}
        case ActionTypes.UPDATE_DIRECTIONS_END_LOC.SUCCESS:
            return{...state, lat :action.data.lat , lng:action.data.lng}
        case ActionTypes.UPDATE_DIRECTIONS_WAYPOITNTS.SUCCESS:{
            return{...state,waypoints:action.data.waypoints}

        }
        case ActionTypes.CLEAR_WAYPOINTS.SUCCESS:{
            return {...state,waypoints:{},lat:{},lng:{} }
        }
        case ActionTypes.ADD_DIRECTION_WAYPOINT.SUCCESS:{
            const {art} = action.data
            const length =Object.keys(state.waypoints).length
            if (art){
                if (length >=8){
                    return state
                    
                }
                else{
                    if ( art.artId in state.waypoints){
                        var waypoints =state.waypoints

                        delete waypoints[art.artId]
                        console.log("DELETE WAYPOINT")
                        return {...state,waypoints}
                        // var waypoints ={...state.waypoints,[art.artId]:{lat:art.latitude,lng:art.longitude},lat:art.latitude,lng:art.longitude}
                    }
                    else{
                        var waypoints ={...state.waypoints,[art.artId]:{lat:art.latitude,lng:art.longitude}}
                        console.log("nre waypoint " + waypoints)

                        return{...state,waypoints,lat:art.latitude,lng:art.longitude}
                    }
                }
            }
            else{
                return state
            }
            
        }
        default:
            return state
      }
    
};


export default directions;
