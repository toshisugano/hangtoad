import React from 'react';  

const ImgLoader = (props) => {

	let src;
	let missCount = props.misses.length; 
	let urls = [
				'https://farm1.staticflickr.com/678/21605549785_3245ca90f9.jpg',
				'https://farm1.staticflickr.com/566/21605549925_89b036c583.jpg',
				'https://farm1.staticflickr.com/756/21418561659_481f2f0fd4.jpg',
				'https://farm1.staticflickr.com/763/21579304506_c88492b140.jpg',
				'https://farm1.staticflickr.com/590/21417449070_529a609b5b.jpg',
				'https://farm6.staticflickr.com/5808/21418561559_9605d95aa9.jpg',
				'https://farm1.staticflickr.com/702/21417639368_a48de37465.jpg',
				'https://farm6.staticflickr.com/5747/21418561839_712eae1e74.jpg',
				'https://farm5.staticflickr.com/4382/36367253863_e008e23985.jpg'  
			    ];

	 
	src = urls[missCount]; 

	return(
		<div>
			<img src={src} />
		</div>
	);  

} 

export default ImgLoader;


