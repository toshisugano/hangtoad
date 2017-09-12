import $ from 'jquery';
 
const buildUrl = (response) => {

	let globVar = {};

	globVar.res = response;  
    globVar.responseObj = response.query.pages;    
    globVar.genKeys = Object.keys(response.query.pages);   

    globVar.wikiURL = "https://en.wikipedia.org/wiki/"; 
	globVar.apis = "http://en.wikipedia.org/w/api.php?action=query&generator=allpages&gapfrom=";
	globVar.format = "&&format=json&callback=?"; 
	globVar.extractsUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=";
	globVar.callback = "&callback=?"; 
	globVar.wiki; 

	globVar.Arr = [];
	globVar.list = [];

	$.each(globVar.genKeys, function(i, v){    

		   globVar.extractJoin = '';
		   globVar.extractArr = [];
		   globVar.title = globVar.responseObj[v].title;  
		   globVar.titleOriginal = globVar.title;
		   globVar.titleSplit = globVar.title.split('');  

		   let currObj = {
		   		  key : v,
	              titleOriginal : globVar.titleOriginal,
	              url : globVar.wikiURL + globVar.title,
	              extract : ''
	       };   

		   for (i=0; i<globVar.titleSplit.length; i++){ 
		      if (globVar.titleSplit[i] === ' ') {
		        globVar.titleSplit[i] = '_';
		      }
		      if (globVar.titleSplit[i] === "'"){
		        globVar.titleSplit[i] = '%27';
		      }
		    }

		   globVar.title = globVar.titleSplit.join(''); 
		   globVar.newUrl = ''; 
		   globVar.newUrl += globVar.extractsUrl + globVar.title + globVar.callback;  
		   globVar.Arr.push(globVar.newUrl);  
		   globVar.list.push(currObj)

	}); 

	return globVar;

};

export default buildUrl;
