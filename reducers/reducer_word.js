export const secret = [
	{word : "jamaica", hint : "Bob Marley Mon!"},
	{word : "quinoa", hint : "Gluten Free Grain from Peru"},
	{word : "peanut", hint : "The official nut of Georgia"},
	{word : "donaldtrump", hint: "Orange faced shit-gibbon"}
];

export const num = 0;

export const number = (()=>{
	return Math.floor(Math.random()*5);
})(); 

export function wordMain() { 
	
	return secret[number || num].word;
}

export function wordHint() {
	 
	return secret[number || num].hint;
}

 