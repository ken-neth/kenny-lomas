import { ActionTypes }  from "../actionTypes/index";

import axiosFn from '../../axios/index'

export function toggleSideNav (){
    return {type:ActionTypes.TOGGLE_SIDE_NAV.SUCCESS}
}


//open and close side nav
export function updateVis (visible){
    return {type:ActionTypes.UPDATE_VIS_STATUS.SUCCESS,data:{visible}}
}
export function closeNav (){
    return {type:ActionTypes.UPDATE_VIS_STATUS.SUCCESS,data:{visible:false}}
}
export function openNav (){
    return {type:ActionTypes.UPDATE_VIS_STATUS.SUCCESS,data:{visible:true}}
}

export function changeNavMenu(newWindow){
    const data ={
        window:newWindow
    }

    return {type:ActionTypes.UPDATE_NAV_WINDOW.SUCCESS,data}
}

export function changeNavArt(artId){
    return {type:ActionTypes.UPDATE_NAV_ART.SUCCESS,data:{artId}}
}
