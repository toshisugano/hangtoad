export const ADD_LETTER = 'ADD_LETTER';
export const SEND_LETTER = 'SEND_LETTER';
export const SEND_MISSES = 'SEND_MISSES';
export const TOGGLE_IMG = 'TOGGLE_IMG';

let nextTodoId = 0;

export function sendLetter(text, wordMain, arr) {  
	return {
		type : SEND_LETTER,
		text : text, 
		word : wordMain,
		currState : arr
	};
}

export function sendMisses(arr) {
	console.log("action sent misses");
	return {
		type : SEND_MISSES,
		missState : arr
	};
}

export function toggleImage(src) {
	return {
		type : TOGGLE_IMG,
		srcState : src
	};
}