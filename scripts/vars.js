const globVar = {};

globVar.win; 
globVar.winWidth;
globVar.winHeight; 
globVar.url = window.location.href; 
globVar.scrollTop = pageYOffset;
globVar.date = new Date(); 
globVar.year = (function(){
	let that = globVar;
	return that.date.getFullYear(); 
})();

globVar.setVars = () => { 
	let that = globVar; 
	that.win = window;
	that.winWidth = that.win.innerWidth;
	that.winHeight = that.win.innerHeight;     
	that.scrollTop = pageYOffset;
} 

export default globVar;
//alternative is to export class 
