import ATC from './actionTypeCreator'

export default {
    UPDATE_DIRECTIONS_ROUTE :ATC("UPDATE_DIRECTIONS_ROUTE"),
    UPDATE_DIRECTIONS_STATE: ATC("UPDATE_DIRECTIONS_STATE"),
    UPDATE_RETURN_TO_START:ATC("UPDATE_RETURN_TO_START"),
    UPDATE_DIRECTIONS_END_LOC:ATC("UPDATE_DIRECTIONS_END_LOC"),
    UPDATE_DIRECTIONS_WAYPOITNTS:ATC("UPDATE_DIRECTIONS_WAYPOITNTS"),
    ADD_DIRECTION_WAYPOINT:ATC("ADD_DIRECTION_WAYPOINT"),
    CLEAR_WAYPOINTS :ATC("CLEAR_WAYPOINTS")
}