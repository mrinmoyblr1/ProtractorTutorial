describe("Chain Locator Demo", function() {
	function Calc(a,b,c) {
		  element(by.model("first")).sendKeys(a);
		//  element(by.model("operator")).element(by.css("option:nth-child(4)")).click();  // This chain locator
		  element(by.model("second")).sendKeys(b);
		  element.all(by.tagName("option")).each(function(item) {
			  item.getAttribute("value").then(function(text){
				  if(text==c){
					  item.click();
				  }
			  })
		  })
		  element(by.id("gobutton")).click();		  
	}
	
	
	
  it("Open Angular js Website", function() {
	  browser.driver.manage().window().maximize();
	  browser.get("http://juliemr.github.io/protractor-demo/");
	  Calc(3,5,"MULTIPLICATION");
	  Calc(3,5,"DIVISION");
	  Calc(3,5,"DIVISION");
	  Calc(10,6,"ADDITION");

	  element.all(by.repeater("result in memory")).each(function(items) {
		  items.element(by.css("td:nth-child(3)")).getText().then(function(text)
				  {
			  console.log("The Results are: "+text);
				  });
	  	})	  
  });
});
