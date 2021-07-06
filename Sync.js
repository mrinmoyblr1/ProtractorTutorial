describe("Protractor Synchronization Step", function() {
  it("Open Non-Angular Synchronization Website", function() {
	  browser.waitForAngularEnabled(false);	 
	  browser.driver.manage().window().maximize();
	  // browser.get will hit URL in the browser
	  browser.get("https://www.itgeared.com/demo/1506-ajax-loading.html");
	  element(by.css("a[href*='loadAjax']")).click();	  
	  var EC = protractor.ExpectedConditions;
	  browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);	  
	  element(by.id("results")).getText().then(function(text){
		  console.log(text);
	  })
	  //expect(element(by.id("results")).getText()).toBe("Process completed!  This response has been loaded via the Ajax request directly from the web server, without reoading this page.");
  });
});
