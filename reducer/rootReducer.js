import * as types from '../constants/ActionTypes';

var rootReducer = function (state = {}, action) {
    switch (action.type) {
        case types.ROOT_ACTION:
        // Return Immutable state object with update message
            return {
                ...state,
                message: action.name
            }
        //NEVER forget to have a "default: return state"
        default:
            return state;
    }
}