import $ from 'jquery'; 

//export Ajax.call(this.state.userInput); 

const globVar = {};

globVar.list = [];

globVar.title;
globVar.titleOriginal;
globVar.titleSplit;
globVar.extractJoin;
globVar.newUrl;
globVar.res;
globVar.responseObj;
globVar.extract;
globVar.genKeys;
globVar.extractArr = [];   

globVar.extractsUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=";         
globVar.wikiURL = "https://en.wikipedia.org/wiki/";
globVar.callback = "&callback=?"; 
globVar.apis = "http://en.wikipedia.org/w/api.php?action=query&generator=allpages&gapfrom=";
globVar.format = "&&format=json&callback=?";
globVar.wiki; 
 
globVar.setWiki = (obj) => {
	let that = globVar;
	that.wiki = that.apis + obj + that.format; 
	return that.wiki;
};  

globVar.callAjax = (input) => { 
	 
	return $.ajax({
      type: 'GET',
      url: input, 
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function(response){   
          globVar.res = response;  
          globVar.responseObj = response.query.pages;   
          globVar.genKeys = Object.keys(response.query.pages);  
      } 
	  }).then(() => { 
	      $.each(globVar.genKeys, function(i, v){  
	           globVar.extractJoin = '';
	           globVar.extractArr = [];
	           globVar.title = globVar.responseObj[v].title; 
	           globVar.titleOriginal = globVar.title;
	           globVar.titleSplit = globVar.title.split(''); 

	           let currObj = {
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
	           globVar.newUrl=''; 
	           globVar.newUrl += globVar.extractsUrl + globVar.title + globVar.callback;    
	           //constructing new url for extracts call

	           $.ajax({
	              type: 'GET',
	              url: globVar.newUrl, 
	              contentType: "application/json; charset=utf-8",
	              async: false,
	              dataType: "json",
	              success: function(res){    
	                  globVar.extractSplit = res.query.pages[v].extract.split(' ');  
	                      globVar.extractArr = [];
	                      if(res.query.pages[v].extract.length > 1 && res.query.pages[v].extract.slice(0, 18) != "This is a redirect" ) { 
	                          for(let k=0; k<globVar.extractSplit.length; k++){
	                            globVar.extractArr.push(globVar.extractSplit[k]);
	                          } 
	                          globVar.extractJoin = globVar.extractArr.join(' ');   
	                          currObj.extract = globVar.extractJoin;  
	                      }  
	              },
	              error: function(xhr){ 
	              }
	            }).then(() => {
	               globVar.list.push(currObj);
	               if (globVar.list.length === 10) {
	               	 return "globVar.list;"
	               }    
	            }); 
      }); //END EACH LOOP 
	 
  });//END AJAX 

}; 

export default globVar;