describe("Protractor baby step", function() {
	
  it("Open Angular js Website", function() {
	  browser.driver.manage().window().maximize();
	  // browser.get will hit URL in the browser
	  browser.get("https://angularjs.org/");
	  browser.sleep(5000);
	  browser.get("http://juliemr.github.io/protractor-demo/").then(function() {
		  console.log("I'm in the Last step to execute");	  	
	  });    
  });
});

// First parameter - Test Suites Name
// Second parameter is - function(function will have all tests(it blocks))




