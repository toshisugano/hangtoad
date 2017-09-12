import React from 'react';

const LettersHitList = (props) => {
	 
	const lettersList = props.hit.map((item, index) => {
		let classN = 'letterSquare';

		if (item === ' ') {
			classN = 'letterSquareBlank';
		}

		return (
			<div key={index} className={classN}> 
				<h1>{item}</h1>
			</div> 
		);
	}); 
	 
	return <div><h2>{lettersList}</h2></div>
}

export default LettersHitList;