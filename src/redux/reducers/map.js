
import { ActionTypes } from "../actionTypes/index";

const initialState = {

    center:{
        lat:null, 
        lng:null
    },
    location: {
        lat: 51.454771199999996, 
        lng: -2.6058752
    },
    new_art:{
        flag: false
    },
    filterVisited:false,
    createRoute:{
        selectedPins:[],
        returnToStart:false
        
    },
   
    
    
};

const map = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_MAP_CENTER.SUCCESS:
            return {...state, center:{lat:action.data.lat, lng :action.data.lng}}
        case ActionTypes.UPDATE_USER_LOC.SUCCESS:
            const {lat,lng} = action.data
            const location = {lat,lng}

            return {...state, location}

        case ActionTypes.UPDATE_ADD_FLAG.SUCCESS:
            const new_art = {...state.new_art, flag:action.data.flag}
            return {...state, new_art}
        case ActionTypes.TOGGLE_MAP_FILTER.SUCCESS:
            return{...state,filterVisited:!state.filterVisited}

        default:
            return state
      }
    
      
};


export default map;