export default function(state = null, action) {

	switch(action.type) {
		
	case 'ADD_LETTER' : 
		return action.text;
	case 'SEND_LETTER' :
		return action.text;
	}  

	return state;

}