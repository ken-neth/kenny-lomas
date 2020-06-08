
import mapActions from './map'
import userActions from './user'
import artActions from './art'
import sideNavActions from './sideNav'
import photosActions from './photos'
import directionsActions from './directions'
import notificationActions from './notifications'

export const ActionTypes = {
    ...mapActions,
    ...userActions,
    ...artActions,
    ...sideNavActions,
    ...photosActions,
    ...directionsActions,
    ...notificationActions
}