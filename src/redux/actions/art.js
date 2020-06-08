import { ActionTypes }  from "../actionTypes/index";

import axiosFn from '../../axios/index'

export function addArtToDB (latitude, longitude,  name, description){

    console.log("upload art to db action " + latitude, longitude,  name, description)
    const url = '/art/add'
    const apiPayload ={
        method:"POST",
        data: {latitude,longitude,name,description}
    }
    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.ADD_ART_DB)
    }
}

export function updateArtFromBounds(payload, userId){
    const minLng = payload.ia.j
    const maxLng = payload.ia.l

    const minLat = payload.na.j
    const maxLat = payload.na.l

    const url = '/art/' + minLng +'/' + maxLng +'/' +minLat +'/'+maxLat+'/'+userId

    const apiPayload = {method: "GET"}

    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.REPLACE_ART)
    }
}

export function updateVisiedStatus(artId, userId, visited){
    const url = '/visited/updateVis'
    const apiPayload ={
        method:"POST",
        data: {artId,userId,visited}
    }
    return (dispatch) => {
        axiosFn.APIFetchToAction(dispatch, url, apiPayload, ActionTypes.UPDATE_VIS_DB)
    }
}