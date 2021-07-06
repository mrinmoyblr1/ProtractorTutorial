describe("Protractor Alerts Steps", function() {
  it("Open Non-Angular Website Alerts", function() {
	  browser.waitForAngularEnabled(false);	 
	  browser.driver.manage().window().maximize();	
	  browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
	  browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());	  
	  element(by.css("a[href*='sign_in']")).getText().then(function(text){
		  console.log(text);
	  })
  });
});