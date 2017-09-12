import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

import LettersHitList from './letterHitList';

function mapStateToProps(state){ 
	
	return {
	 	hitLetters: state.lettersHit,
	 	mainWord : state.wordMain,
	 	countHit : state.hitCount
	};

} 

class LettersHit extends Component {   
	
	constructor(props){ 
		super(props);  
	}

	renderBlanks() { 
  		let arr = this.props.mainWord.split('');
  		return arr.map((letter, index) => {
			let classN = 'letterSquare'; 
			return (
					<div key={index} className={classN}>  
					G
					</div> 
			);
		});
	}  
 
	render() {

		if (!this.props.hitLetters) {
			return(
				<div className='row letterHit'>
				 {this.renderBlanks()}
				</div>
			);
		} 

		return (
			<div className='row letterHit' > 
				 <LettersHitList hit={this.props.hitLetters}/>
			</div>
		);
 
		
	}
} 

export default connect(mapStateToProps)(LettersHit);
