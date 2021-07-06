describe("Protractor Alerts Steps", function() {
  it("Open Non-Angular Website Alerts", function() {
	  browser.driver.manage().window().maximize();	
	  browser.waitForAngularEnabled(false);	  
	  browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
	  element(by.id("confirmbtn")).click();
	  browser.switchTo().alert().accept().then(function(){
			  browser.sleep(5000);			  
		  });
	  element(by.id("confirmbtn")).click();
	  browser.switchTo().alert().dismiss().then(function(){
			  browser.sleep(5000);			  
		  });
  });
});