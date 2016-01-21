import * as types from '../constants/ActionTypes';

var childReducer = function (state = {}, action) {
    switch (action.type) {
    	case types.CHILD_ACTION:
            return {
                ...state,
                name: action.id
            }
        default:
            return state;
    }
}