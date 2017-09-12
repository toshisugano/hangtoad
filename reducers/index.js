import { combineReducers } from 'redux';   

import { wordMain } from './reducer_word';
import { wordHint } from './reducer_word'; 
import ReducerLettersHit from './reducer_letters_hit'; 
import ReducerLettersMiss from './reducer_letters_miss';
import ReducerUserInput from './reducer_user_input';

//this is the application state:
//{selectedLetter, reducerInput, reducerLetters}

const rootReducer = combineReducers({ 
	wordMain : wordMain,
	wordHint : wordHint, 
	lettersHit : ReducerLettersHit, 
	lettersMiss : ReducerLettersMiss,
	userInput : ReducerUserInput   
});

export default rootReducer;

