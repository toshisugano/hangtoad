import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
 //whatever is returned by this function will show up as props
 //this.props.userInput will be array returned by the UserInput reducer
	return {
	 	hintWord: state.wordHint
	};

} 

class WordHint extends Component {  
 
	render() {
		return (
			<ul className='row' > 
				 <li>
				 <p className='hintWord'>HINT : {this.props.hintWord}</p>
				 </li>
			</ul>
		);
	}
} 

export default connect(mapStateToProps)(WordHint);
