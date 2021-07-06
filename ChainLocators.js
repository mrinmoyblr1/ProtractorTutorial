describe("Chain Locator Demo", function() {
  it("Open Angular js Website", function() {
	  browser.driver.manage().window().maximize();
	  browser.get("http://juliemr.github.io/protractor-demo/");
	  element(by.model("first")).sendKeys("4");
	  element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
	  element(by.model("second")).sendKeys("5");
	  element(by.id("gobutton")).click();
	  // repeater, chain locators, CSS for identical Tags
	  element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
			  {
		  console.log(text);
			  });
  });
});
// First parameter - Test Suites Name
// Second parameter is - function(function will have all tests(it blocks))
