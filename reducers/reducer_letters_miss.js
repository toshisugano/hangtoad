export default function(state = null, action) {

	switch(action.type){
		case 'SEND_MISSES':    
		console.log("reducer received : " + action.missState);
		return action.missState;  
	}
 
	return state;  
}