import React, { Component } from 'react';   

const LettersMiss = (props) => {
	let obj;

	  if (!props.missed) {
	  	obj = "MISSED : 0";
	  } 
	  else {
	  	obj = props.missed;
	  }
	  
	return (
		<div><h2>Missed Letters : {obj} </h2></div>
	); 
} 

export default LettersMiss;
