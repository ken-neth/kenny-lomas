import { combineReducers } from 'redux';
import map from './map'
import user from './user'
import art from './art'
import sideNav from './sideNav'
import photos from './photos'
import directions from './directions'
import notifications from './notifications'

export default combineReducers ({
    map,
    user,
    art,
    sideNav,
    photos,
    directions,
    notifications
});
