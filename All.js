describe("Chain Locator Demo", function() {
	function Add(a,b) {
		  element(by.model("first")).sendKeys(a);
		  element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		  element(by.model("second")).sendKeys(b);
		  element(by.id("gobutton")).click();
	}
  it("Open Angular js Website", function() {
	  browser.driver.manage().window().maximize();
	  browser.get("http://juliemr.github.io/protractor-demo/");
	  Add(2,3);
	  Add(3,4);
	  Add(4,5);
	  Add(5,6);
	  Add(6,7);
	  Add(7,8);
/*	  for(i=5;i<=10;i++)
		  {
		  element(by.model("first")).sendKeys(i);
		  element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		  element(by.model("second")).sendKeys(i);
		  element(by.id("gobutton")).click();
		  }*/
	  element.all(by.repeater("result in memory")).count().then(function(count){
		  console.log("The Total Count is: "+count);
	  });
	  element.all(by.repeater("result in memory")).each(function(items) {
		  items.element(by.css("td:nth-child(3)")).getText().then(function(text)
				  {
			  console.log("The Results are: "+text);
				  });
	  	})	  
  });
});
