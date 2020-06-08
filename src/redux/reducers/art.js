
import { ActionTypes } from "../actionTypes/index";
import { stat } from "fs";

const initialState = {

};

const art = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ART_DB.SUCCESS :

            var newArt =artToArrayIndex(action.data)
            return {...state,...newArt}
        case ActionTypes.REPLACE_ART.SUCCESS:
            var newArt =artToArrayIndex(action.data)
            return {...newArt}
        case ActionTypes.UPDATE_VIS_DB.SUCCESS:
            state[action.data.artId].visited =action.data.visited
            // var newArt = 
            // newArt.visited = action.data.visited
            return{...state}
        default:
            return state
      }
    
      
};

function artToArrayIndex(art){
    var newArt={}
    art.forEach(element => Object.assign(newArt, artToKeyObj(element)));
    return newArt

}

function artToKeyObj(art){
    var obj = {[art.artId]:art}
    return obj;
}

export default art;