// Action is an object that contains a "type" property. This type allows for further
// handling of the action. Of course, the action can also contain other properties to
// pass any data you want.

// We'll also see later that the action creator can actually return something other than an action, like a function. 

//"Dispatching an action"
// - This action be sent somewhere so that anyone interested could know that something happened and could act accordingly.
// - To dispatch an action we need... a dispatch function and handler to act to action.


import * as types from '../constants/ActionTypes';

export function Root(name) {
  return {
    type: types.ROOT_ACTION,
    name
  };
}

export function Child(id) {
  return {
    type: types.CHILD_ACTION,
    id
  };
}