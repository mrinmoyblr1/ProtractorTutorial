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
			  browser.getAllWindowHandles().then(function(handles){
				  browser.getTitle().then(function(title){
					  console.log("The Title of the Page Before switching to Child Window: "+title);					  
				  })	
				  
				  browser.switchTo().window(handles[1]);
				  
				  browser.getTitle().then(function(title){
					  console.log("The Title of the Page after switching to Chiled Window: "+title);					  
				  })
				  
				  // To switch to Parent window again we have to use below
				  browser.switchTo().window(handles[0]);
				  browser.getTitle().then(function(title){
					  console.log("The Title of the Page at 3rd Time... : "+title);					  
				  })
			  })
			  browser.sleep(5000);
		  });
	  });
  });
});
