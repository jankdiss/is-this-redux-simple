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
	</li>
	<li>
	<b>Root Reducer</b><br/>
		- Top leavel handler data modifications and route to child Reducers acording to action type.(or reduced the action)<br/>
		- A reducer is a subscriber to actions.<br/>
		-  A reducer is just a function that receives the current state of your application, the action,
     	and returns a new state modified <br/>
	</li>
	<li>Reducers</li>
</ul>