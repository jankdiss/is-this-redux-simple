import { createStore, combineReducers, bindActionCreators } from 'redux';
import import * as actions  from './action/actionCreator';
import childReducer  from './reducer/childReducer';
import rootReducer  from './reducer/rootReducer';

export default function getStore(initialState) {
	
	const reducer = combineReducers({
		root:rootReducer,
	    child: childReducer
	});

 	const store = createStore(reducer);

  	return store;
};
