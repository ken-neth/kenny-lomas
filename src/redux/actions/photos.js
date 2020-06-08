import { ActionTypes }  from "../actionTypes/index";
import axios from 'axios'
import axiosFn from '../../axios/index'
var FormData = require('form-data')

export function replacePhotos(artId,photos){
    
    return {type:ActionTypes.REPLACE_PHOTOS.SUCCESS, data:{artId,photos}}
}

export function updatePhotosFromBackend(artId){
    const url = '/photos/' + artId

    const apiPayload = {method: "GET"}

    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.REPLACE_PHOTOS)
    }
}

export function uploadPhoto(photo, artId, title,userId){
    
    const insertDBUrl = '/photos/addToDB'
    const insertDBPayload={
        method: "POST",
        data: {artId,userId,title}
    }

    const axiosRequest = axiosFn.configureAxiosRequest(insertDBUrl, insertDBPayload)

    return (dispatch) =>{
        axios({...axiosRequest
        }).then(res => {

            // create multipart form data that includes the image being uploaded
            let form = new FormData();
            form.append('artId', artId)
            form.append('title', title)
            form.append('userId', userId)
            form.append('photoId',res.data.photoId)
            form.append('photo', photo)

            console.log("INSIDE AXIOS ACTION FOR UPLOAD " )
            console.log( res.data.photoId)

            // create the axios request headers
            const insertImageurl = '/photos/add'
            const insertImagePayload={
                method: "POST",
                data: form,
                headers: {
                'Access-Control-Allow-Origin' : '*',
                'content-type' : 'multipart/form-data',
                },
                
            }
            axiosFn.APIFetchToAction(dispatch, insertImageurl, insertImagePayload, ActionTypes.UPLOAD_PHOTO)
            


        }).catch(err =>dispatch ({type: ActionTypes.UPLOAD_PHOTO.FAILURE, data:err}))
    }
    
    
    
}
