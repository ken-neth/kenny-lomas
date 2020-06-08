import { ActionTypes } from "../actionTypes/index";
import {WINDOW_TYPES} from '../../Components/NavigationMenu/window-Types';

const initialState = {
    visible : true,
    currentWindow : WINDOW_TYPES.MENU,
    art : {
        artId : null
    },
    menu : {

    },
    settings : {

    }

};

const sidenav = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SIDE_NAV.SUCCESS:{
            const nextFlag = !state.visible
            return {...state, visible:nextFlag }
        }
        case ActionTypes.UPDATE_VIS_STATUS.SUCCESS:{
            const {visible} = action.data
            return {...state, visible:visible }
        }
        case ActionTypes.UPDATE_NAV_WINDOW.SUCCESS:{
            const {window} = action.data
            return {...state, currentWindow:window}

        }
        case ActionTypes.UPDATE_NAV_ART.SUCCESS:{
            const art = {...state.art, artId:action.data.artId}
            return{...state, art}
        }

        default:
            return state
      }
    
      
};

export default sidenav

// case ActionTypes.UPDATE_NAV_WINDOW.SUCCESS:
//             // const {display, art_id} = action.data
//             const {visible, currentWindow, art} = action.data
//             return {...state, visible, currentWindow, art:{...state.art, ...(art || {}) } }