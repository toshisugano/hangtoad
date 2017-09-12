import 'babel-polyfill'
//import $ from 'jquery' ramenbar4180@icloud.com
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Vars from './scripts/vars' 

export class App extends Component {

	constructor(props) {
		super(props);
		Vars.setVars(); 
		this.state = {
			width: Vars.winWidth,
			height : Vars.winHeight,
			scrollTop : Vars.scrollTop,
			url : Vars.url
		}

		this.resetVars = this.resetVars.bind(this);
	} 

	/*componentWillMount() { 
		console.log("Component DID Mount");
		execusted before rendering on the server and client side
	}*/

	/*componentWillReceiveProps(newProps) { 
		console.log("Component WILL receive props");
		invoked when the props are updated before another render is called
	}*/

	/*componentWillUpdate(nextProps, nextState) { 
		//called just before rendering
		console.log("Component WILL Update");
	}*/

	/*componentDidUpdate(prevProps, nextState) { 
		//called just after rendering
		console.log("Component DID Update");
	}*/ 

	componentDidMount() {  
		// executed after the first render of the element on the DOM
		//this is where DOM AND STATE updates should occur and AJAX calls as well
		console.log("Component DID Mount");
		window.onscroll = () => this.resetVars();  
		window.onresize = () => this.resetVars();  
	}

	componentWillUnmount() { 
		//is called after the component is unmounted from the DOM
		console.log("Component WILL Unmount");
	} 

	resetVars() {  
		Vars.setVars();  
		this.setState({
			width: Vars.winWidth,
			height : Vars.winHeight,
			scrollTop : Vars.scrollTop,
			url : Vars.url
		});
	}

	render() {
		return (
			<div ref="list">
				<h1 className="title">Window Width : {this.state.width}</h1>
				<h2 className="title">Window Height : {this.state.height}</h2>
				<h2 className="title">Window Scroll : {this.state.scrollTop}</h2>
			</div>
		);
	}
}
 
