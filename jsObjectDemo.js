function car()
{
	
	this.firstInput=element(by.model("first"));
	this.secondInput=element(by.model("second"));
	this.goButton=element(by.id("gobutton"));
	this.result=element(by.css("h2[class='ng-binding']"));	
	
	this.color="Red";
	this.engine="Turbo";
	this.brand="BMW";	
	this.search="by.css('input')";
	
	
	this.getURL=function()
	{
		browser.get("http://juliemr.github.io/protractor-demo/");
	};
};

// To expose the JavaScript Object to other file we have to do following.. 
module.exports=new car();
/*a.getModel();
console.log(a.engine);

*/



