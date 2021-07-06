describe("Actions Demo", function() {
  it("Open Angular js Website", function() {
	  browser.driver.manage().window().maximize();
	  browser.get("https://angularjs.org/");
	  browser.get("http://juliemr.github.io/protractor-demo/");
	  element(by.model("xyz")).sendKeys("river");
	  browser.actions().MOUSEMOVE(element(by.model("xyz")).sendKeys("Landon")).perform();	  
	  browser.actions.sendKeys(protractor.Key.ARROW_DOWN).perform();
	  browser.actions.sendKeys(protractor.key.ENTER).perform().then(function(){
		  browser.sleep(5000);
		  // Adding Assertions here
		  expect(element.all(by.css("tagname[attribute*='Valu']")).count()).toEqual(7); // here we used regular expression in the CSS.
		  element.all(by.css("tagname[attribute*='Valu']")).get(0).click();
		  element(by.css("a[tagName*='valu']")).click().then(function(){
			  
			  browser.sleep(5000);
		  });
	  });
  });
});
