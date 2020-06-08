
export default function createActionType(action){
    return {
        REQUEST : "REQUEST_" + action,
        SUCCESS : "RECEIVED_" + action + "_SUCCESS",
        FAILURE : "RECEIVED_" + action + "_FAILURE"
        
    }
}