import { createStore, combineReducers, bindActionCreators} from 'redux';
import import * as actions  from './action/actionCreator';

// slices of state c
var reducer = combineReducers({
    child: childReducer
    // can have more state objects,
});

var store = createStore(reducer);

const actions = bindActionCreators(actions, store.dispatch);

// simpla call to 
actions.Root('bob');