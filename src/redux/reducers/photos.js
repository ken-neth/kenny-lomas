
import { ActionTypes } from "../actionTypes/index";

const initialState = {};

const photos = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REPLACE_PHOTOS.SUCCESS :
            return {[action.data.artId] : action.data.photos}
        case ActionTypes.UPLOAD_PHOTO.SUCCESS:
            console.log("UPLOAD PHOTO INSIDE REDUCER SUCESS")
            return state
        default:
            return state
      }
    
};


// function photoToArrayIndex(photos, art_id){
//     var newPhotos={}
//     photos.forEach(photo => Object.assign(newPhoto, artToKeyObj(photo)));
//     return newPhotos

// }

// function artToKeyObj(photo){
//     var obj = {[photo.art_id]:photo}
//     return obj;
// }

export default photos;
