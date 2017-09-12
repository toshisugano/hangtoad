export default function(state = null, action) {
 	
	switch(action.type){
		case 'SEND_LETTER':   
		return action.currState; 
		break; 
	}
 
	return state;

}