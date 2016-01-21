<h1>is-this-redux-simple" </h1>

<h2><b>"predictable state container for JavaScript apps"</b></h2>

<ul>
	<li>Action Creator</li>
	<li>Root component</li>
	<li>Smart Child components</li>
	<li>Dump Child components</li>
	<li>
		<b>View layer binder</b><br/>
		- Mechanism to subscribe to state updates<br/>
	</li>
	<li>
		<b>Single Store</b><br/>
		- Holds the application state i.e. all the application's data that will evolve over time<br/>
		- The Redux instance is called a store<br/>
		- createStore expects a function that will allow it to reduce your state<br/>
		- Contains read only state object<br/>
	</li>
	<li>
	<b>Root Reducer</b><br/>
		- Top leavel handler data modifications and route to child Reducers acording to action type.(slice the state)(or reduced the action)<br/>
		- A reducer is a pure function that subscriber to actions.<br/>
		- A reducer is just a function that receives the current state of your application, the action, and returns a new state modified <br/>
     	- "stateless stores"
     	- Redux registered as action "handlers" 
     	- except two parametrs cureent state and action object ( with type )
     	- That will allow it to reduce your state
     	- this will init the application state with defult state and return the state 
	</li>
	<li>
		<b>Reducers</b><br/>
		- Redux doesn't care if we have one reducer or a dozen and it will even help us to combine <br/>
		- state parameter can be any type i.e.an object literal, an array,a boolean, a string, an immutable structure, ... <br/>
		- use combineReducers to combine all<br/>
		- this will init the application state with defult state and return the state - combineReducers has all the state object that redeusers return.
	</li>
</ul>