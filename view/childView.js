import React, { Component } from 'react';


export default class ChildView extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { message } = this.props
    	return (<div>{message}</div>);
  	}
};