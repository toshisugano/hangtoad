import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendLetter } from '../actions/actions';
import { sendMisses } from '../actions/actions'; 
import { bindActionCreators } from 'redux';
import PrintState from '../components/printstate'; 
import WordHint from '../containers/wordHint'; 
import LettersMiss from './lettersMiss'; 
import ImgLoader from '../components/imgloader';
import ProjectFooter from '../components/projectFooter'; 
import ProjectHeader from '../components/projectheader';

function mapStateToProps(state){ 
	 return {
	 	reducerUserInput : state.reducerUserInput,
	 	mainWord : state.wordMain,
	 	hitLetters : state.lettersHit,
	 	missLetters: state.lettersMiss  
	 };  
}

function mapDispatchToProps(dispatch) {  
	return bindActionCreators({ 
								letterSend : sendLetter,
								missesSend : sendMisses
							  }, dispatch);
}

class UserInput extends Component { 

	constructor(props){ 
		super(props); 

		this.state = {
			init : [],
			misses : [] 
		};

		this.initSquares = this.initSquares.bind(this);
		this.resetState = this.resetState.bind(this); 
		this.resetMisses = this.resetMisses.bind(this); 
		this.populateLetters = this.populateLetters.bind(this);
		this.populateBlanks = this.populateBlanks.bind(this);
		this.matchLetter = this.matchLetter.bind(this);
		this.lettersMissed = this.lettersMissed.bind(this); 

	}

	populateBlanks(){
		return new Promise((resolve, reject) => {
			let blankArr = [];
			let wordSplit = this.props.mainWord.split('');
			wordSplit.map((letter, index) => {
				blankArr.push(' '); 
				if (blankArr.length === wordSplit.length) {  
					resolve(blankArr);
				}   
				else {
					let err = new Error(); 
				}
			}); 
		}); 
	} 

	populateLetters(arr) {
		return new Promise((resolve, reject) => {
			let blankArr = [];
			let init = this.state.init;
			init.map((letter, index) => {
				blankArr[index] = letter;
				if (blankArr.length === init.length) {
					resolve(blankArr);
				}
				else {
					let err = new Error(); 
				}
			}); 
		});
	} 

	matchLetter(input) {    

		return new Promise((resolve, reject) => { 
			let misses = 0;
			let initArr = this.state.init;
			let wordSplit = this.props.mainWord.split(''); 
			wordSplit.map((letter, index) => { 
			 
				if ((wordSplit[index] === input) && (this.state.init[index] === " ")) {   
					initArr[index] = letter; 
					this.resetState(initArr); 
				} 
				if (wordSplit[index] != input) {   
					misses++;   
					this.lettersMissed(input, misses, wordSplit);
				} 

				if ((wordSplit[index] !== input) && (this.state.init[index] !== " ")) { 
					initArr[index] = this.props.hitLetters[index];
					this.resetState(initArr);  
				}

				if (wordSplit.length === (index+1)) { 
					this.resetState(initArr);
					resolve(this.state.init);
				}

			});
		}); 

	}  

	resetState(val) {  
		this.setState({
			init : val
		});   
	}

	resetMisses(val) { 
		this.setState({
			misses : val
		}); 
		this.props.missesSend(this.state.misses);
	} 

	lettersMissed(input, missCount, word) {
		//let arr = this.state.misses;  
		let arr = this.state.misses; 
		
		if (missCount === word.length) { 
			arr.push(input); 
			 
			this.resetMisses(arr);   
		}   

	} 

	initSquares() {   
 		return new Promise((resolve, reject) => {

 			if (this.props.hitLetters === null) { 
	 			this.populateBlanks().then((arr) => { 
	 				this.resetState(arr); 
	 				resolve(this.state.init);
	 			});
	 		}  

	 		if (this.props.hitLetters) {  
	 			resolve(this.state.init);
	 		}

 		}); 
	} 

	componentDidMount(){  
		this.initSquares().then((arr) => {   
			this.resetState(arr);
		}); 	
	}

	render() {
		return ( 
			<ul id='input' className='row'    
				onKeyDown={() => {
					document.getElementById('userInput').value = ''; 
				}}
				onKeyUp={(event) => {  

				let val = event.target.value; 
				let word = this.props.mainWord;    

				this.matchLetter(val).then((arr) => { 
					this.resetState(arr); 
					this.props.letterSend(val, word, this.state.init); 
					document.getElementById('userInput').value = val; 
				});  
			}}>  
				<li><ProjectHeader /></li>
				<li><PrintState className="init" val={this.state.init} /></li> 
				<li><WordHint /></li> 
				<li><input id="userInput" htmlFor="input" /></li> 
				<li><LettersMiss missed={this.state.misses} /></li>
				<li><ImgLoader misses={this.state.misses}/></li>
				<li><ProjectFooter /></li>
			</ul>
		);
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
